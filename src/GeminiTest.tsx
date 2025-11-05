import React, { useState } from "react";

const GeminiTest: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("Diga algo sobre IA.");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 🔒 Coloque sua chave diretamente aqui
  const API_KEY = "AIzaSyDbIYXRBm4-DdQioibGLoyeFUJgrqs588Q"; // <-- Substitua pela sua chave real

  const generate = async (userPrompt: string) => {
    setLoading(true);
    setError(null);
    setResult("");

    if (!API_KEY) {
      setError("API key não encontrada. Adicione a chave no código.");
      setLoading(false);
      return;
    }

    try {
      const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(
        API_KEY
      )}`;

      const body = {
        contents: [
          {
            parts: [{ text: userPrompt }],
          },
        ],
      };

      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!resp.ok) {
        const txt = await resp.text();
        throw new Error(`HTTP ${resp.status}: ${txt}`);
      }

      let textOut = "";
      try {
        const json = await resp.json();
        if (json?.candidates && Array.isArray(json.candidates)) {
          textOut = json.candidates
            .map((c: any) => c?.content?.parts?.[0]?.text ?? JSON.stringify(c))
            .join("\n\n");
        } else if (json?.outputs && Array.isArray(json.outputs)) {
          textOut = json.outputs.map((o: any) => o?.text ?? JSON.stringify(o)).join("\n\n");
        } else {
          textOut = JSON.stringify(json, null, 2);
        }
      } catch {
        textOut = await resp.text();
      }

      setResult(textOut);
    } catch (err: any) {
      console.error("Erro Gemini:", err);
      setError(String(err?.message ?? err));
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generate(prompt);
  };

  return (
    <div style={{ maxWidth: 800, margin: "1rem auto", fontFamily: "Inter, Roboto, sans-serif" }}>
      <h1>Teste Gemini (Front-end)</h1>
      <p style={{ color: "#666" }}>
        <strong>Atenção:</strong> chave está embutida no código (não use em produção!)
      </p>

      <form onSubmit={onSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={5}
          style={{ width: "100%", padding: 8, fontSize: 16 }}
        />
        <div style={{ marginTop: 8 }}>
          <button type="submit" disabled={loading} style={{ padding: "8px 14px" }}>
            {loading ? "Gerando..." : "Gerar"}
          </button>
        </div>
      </form>

      <div style={{ marginTop: 16 }}>
        <h3>Resultado</h3>
        {error && <pre style={{ color: "crimson", whiteSpace: "pre-wrap" }}>{error}</pre>}
        {!error && !result && <p style={{ color: "#666" }}>Nenhuma resposta ainda.</p>}
        {result && <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>}
      </div>

      <div style={{ marginTop: 16, color: "#888", fontSize: 13 }}>
        <div>Chave embutida no código: {API_KEY ? "Sim" : "Não"}</div>
      </div>
    </div>
  );
};

export default GeminiTest;
