import { useEffect, useRef, useState } from "react";
import "./Chat.css";
import GeminiTest from "../../GeminiTest.tsx";


type Message = { sender: "user" | "bot"; text: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Olá! Posso ajudar com dúvidas sobre cuidados do seu pet." },
  ]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      const el = chatBoxRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    }
  }, [messages, open]);

  function fuggleOpen() {
    setOpen((s) => !s);
  }

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { sender: "user", text }]);
    setInput("");
    // call backend proxy to Gemini (recommended)
    setMessages((m) => [...m, { sender: "bot", text: "..." }]); // temporary loading message
    (async () => {
      try {
        const res = await fetch("/api/gemini", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: text }),
        });

        if (!res.ok) {
          const err = await res.text();
          // replace loading message with error
          setMessages((m) => {
            const withoutLoading = m.filter((mm) => mm.text !== "...");
            return [...withoutLoading, { sender: "bot", text: "Desculpe, não foi possível obter resposta." }];
          });
          console.error("Gemini proxy error:", err);
          return;
        }

        const data = await res.json();
        const reply = data?.reply ?? JSON.stringify(data);

        // replace loading "..." with actual reply
        setMessages((m) => {
          const withoutLoading = m.filter((mm) => mm.text !== "...");
          return [...withoutLoading, { sender: "bot", text: String(reply) }];
        });
      } catch (error) {
        setMessages((m) => {
          const withoutLoading = m.filter((mm) => mm.text !== "...");
          return [...withoutLoading, { sender: "bot", text: "Erro de rede ao contatar o servidor." }];
        });
        console.error(error);
      }
    })();
  }

  return (
    <div className="chat-widget" aria-live="polite">
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
            <strong>Assistente</strong>
            <button className="chat-close" onClick={toggleOpen} aria-label="Fechar">
              ✕
            </button>
          </div>

          <div id="chat-box" ref={chatBoxRef} className="chat-panel-body">
            {messages.map((m, i) => (
              <div key={i} className={m.sender === "bot" ? "mensagem-bot" : "mensagem-usuario"}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              id="chat-input-header"
              placeholder="Escreva sua pergunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
            />
            <button type="button" onClick={sendMessage}>Enviar</button>
          </div>

          <small className="chat-note">A integração com Gemini deve ser feita no backend.</small>
        </div>
      )}
    </div>
  );
}
