import { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

type Message = { sender: "user" | "bot"; text: string };

export default function Home() {
    const [messages, setMessages] = useState<Message[]>([
        { sender: "bot", text: "Olá! Eu sou o assistente. Como posso ajudar sobre seu pet hoje?" },
    ]);
    const [input, setInput] = useState("");
    const chatBoxRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = chatBoxRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [messages]);

    async function sendMessage() {
        const text = input.trim();
        if (!text) return;

        setMessages((m) => [...m, { sender: "user", text }]);
        setInput("");

        // Placeholder bot response (replace with backend Gemini call)
        setTimeout(() => {
            setMessages((m) => [...m, { sender: "bot", text: `(Resposta simulada) Recebi: "${text}"` }]);
        }, 650);
    }

    return (
        <main className="conteudo-principal main-with-sidebar">
            <section className="secao-info">
                <div className="card o-que-e">
                    <h2>O QUE É?</h2>
                    <p>
                        MEU DIARIO PET É SEU MAIS NOVO ESPAÇO VIRTUAL DE GERENCIAMENTO DE
                        ANIMAIS DE ESTIMAÇÃO. CONSULTAS, VACINAS, HISTÓRICO, TUDO DISPONÍVEL
                        COM UM SIMPLES CLIQUE.
                    </p>
                    <p>
                        CADASTRE GRATUITAMENTE QUANTOS ANIMAIS QUISER. RECEBA DICAS E
                        NOTÍCIAS DE COMO CUIDAR MELHOR DO SEU PET.
                    </p>
                </div>

                <div className="card seus-pets">
                    <h2>SEUS PETS</h2>
                    <div className="lista-pets">
                        {/* Pet 1 - Alfredo */}
                        <div className="pet-item">
                            <span className="pet-icone dog-icon" />
                            <div className="pet-detalhes">
                                <h3>ALFREDO</h3>
                                <Link to="/pet/1/info">INFORMAÇÕES</Link><br />
                                <Link to="/pet/1/vaccines">VACINAS</Link><br />
                                <Link to="/pet/1/records">REGISTROS</Link>
                            </div>
                        </div>

                        {/* Pet 2 - Valentina */}
                        <div className="pet-item">
                            <span className="pet-icone cat-icon" />
                            <div className="pet-detalhes">
                                <h3>VALENTINA</h3>
                                <Link to="/pet/2/info">INFORMAÇÕES</Link><br />
                                <Link to="/pet/2/vaccines">VACINAS</Link><br />
                                <Link to="/pet/2/records">REGISTROS</Link>
                            </div>
                        </div>

                        {/* Link para ver todos os pets no Diário Pet */}
                        <div className="pet-item ver-todos">
                            <span className="pet-icone add-icon" />
                            <div className="pet-detalhes">
                                <h3>GERENCIAR TODOS OS PETS</h3>
                                <Link to="/petdiary" className="link-destacado">
                                    ACESSAR DIÁRIO PET COMPLETO
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seções extras */}
            <section className="secao-extras">
                <div className="card noticias">
                    <h2>ÚLTIMAS NOTÍCIAS</h2>
                    <p>Fique por dentro das novidades do mundo pet...</p>
                </div>
                <div className="card produtos">
                    <h2>PRODUTOS RECOMENDADOS</h2>
                    <p>Descubra produtos incríveis para seu pet...</p>
                </div>
            </section>

            {/* Chatbot area (Gemini integration placeholder) */}
            <section className="chatbot-container card">
                <h2>Assistente (Chat)</h2>
                <div id="chat-box" ref={chatBoxRef}>
                    {messages.map((m, idx) => (
                        <div key={idx} className={m.sender === 'bot' ? 'mensagem-bot' : 'mensagem-usuario'}>
                            {m.text}
                        </div>
                    ))}
                </div>

                <div className="chat-input">
                    <input
                        id="user-input"
                        placeholder="Escreva sua pergunta sobre o pet..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
                    />
                    <button type="button" onClick={sendMessage}>Enviar</button>
                </div>

                <small style={{ display: 'block', marginTop: 8, color: '#666' }}>
                    Observação: a integração com Gemini deve ser feita no backend por segurança (não exponha chaves de API).
                </small>
            </section>
        </main>
    );
}