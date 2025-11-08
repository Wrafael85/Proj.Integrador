import { useEffect, useRef, useState } from "react";
import "./Chat.css";

// Tipagem das mensagens (usuário ou bot)
type Message = { sender: "user" | "bot"; text: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Olá! Posso ajudar com dúvidas sobre cuidados do seu pet." },
  ]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  
  const API_KEY = "AIzaSyDbIYXRBm4-DdQioibGLoyeFUJgrqs588Q";

  // Sempre que abrir o chat ou receber nova mensagem, rola pra baixo
  useEffect(() => {
    if (open) {
      const el = chatBoxRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    }
  }, [messages, open]);

  // Alterna abrir/fechar o chat
  function toggleOpen() {
    setOpen((s) => !s);
  }

  // Envia a mensagem do usuário e chama a API Gemini
  async function sendMessage() {
    const text = input.trim();
    if (!text) return;

    // Adiciona a mensagem do usuário
    setMessages((m) => [...m, { sender: "user", text }]);
    setInput("");

    // Adiciona mensagem de "carregando"
    setMessages((m) => [...m, { sender: "bot", text: "..." }]);

    try {
  const body = {
   // WILLI NESSE TRECHO ESTAMOS DANDO CONTEXTO A IA 
    contents: [
    {
      parts: [
        {
          text: `
<ASSUNTO> = "Animais de estimação"
<MSG_NEGATIVA_TOPICO> = "Apenas posso fornecer informações sobre <ASSUNTO>."

Você é uma IA dentro de um site sobre <ASSUNTO>, que visa democratizar o acesso
dos brasileiros a informações básicas sobre cuidados com animais de estimação.

Regras:
- Você responderá APENAS perguntas relacionadas a <ASSUNTO>.
- Inclua animais exóticos, mas exclua animais selvagens.
- Se o usuário fizer perguntas fora do tema, responda exatamente: <MSG_NEGATIVA_TOPICO>.
- Não fuja do assunto nem invente temas fora do contexto.

Pergunta do usuário:
${text}
          `,
        },
      ],
    },
  ],
};


      const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(
        API_KEY
      )}`;

      // Faz a requisição à API
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!resp.ok) {
        const errText = await resp.text();
        console.error("Erro HTTP:", errText);
        setMessages((m) => {
          const msgs = m.filter((mm) => mm.text !== "...");
          return [...msgs, { sender: "bot", text: "Desculpe, ocorreu um erro ao processar a resposta." }];
        });
        return;
      }

      // Lê a resposta JSON e extrai o texto retornado pelo Gemini
      const json = await resp.json();
      let reply = "";

      if (json?.candidates?.length) {
        reply =
          json.candidates
            .map((c: any) => c?.content?.parts?.[0]?.text ?? "")
            .join("\n") || "Sem resposta.";
      } else {
        reply = "Não foi possível interpretar a resposta do modelo.";
      }

      // Substitui "..." pela resposta real
      setMessages((m) => {
        const msgs = m.filter((mm) => mm.text !== "...");
        return [...msgs, { sender: "bot", text: reply }];
      });
    } catch (err) {
      console.error("Erro de rede:", err);
      setMessages((m) => {
        const msgs = m.filter((mm) => mm.text !== "...");
        return [...msgs, { sender: "bot", text: "Erro de rede ao contatar o servidor." }];
      });
    }
  }

  return (
    <div className="chat-widget" aria-live="polite">
      {/* Botão flutuante para abrir/fechar o chat */}
      <button
        className={`chat-toggle ${open ? "open" : ""}`}
        onClick={toggleOpen}
        aria-expanded={open}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
      >
        💬
      </button>

      {open && (
        <div className="chat-panel card">
          <div className="chat-panel-header">
            <strong>Assistente Pet</strong>
            <button className="chat-close" onClick={toggleOpen} aria-label="Fechar">
              ✕
            </button>
          </div>

          {/* Corpo do chat */}
          <div id="chat-box" ref={chatBoxRef} className="chat-panel-body">
            {messages.map((m, i) => (
              <div key={i} className={m.sender === "bot" ? "mensagem-bot" : "mensagem-usuario"}>
                {m.text}
              </div>
            ))}
          </div>

          {/* Campo de entrada e botão enviar */}
          <div className="chat-input">
            <input
              id="chat-input-header"
              placeholder="Escreva sua pergunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
            />
            <button type="button" onClick={sendMessage}>
              Enviar
            </button>
          </div>

          <small className="chat-note">
            Lembre-se: a IA é apenas orientativa. Procure um veterinário sempre que necessário.
          </small>
        </div>
      )}
    </div>
  );
}
