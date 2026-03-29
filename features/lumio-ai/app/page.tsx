"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setResponse(data.reply || "Cevap alınamadı.");
    } catch (error) {
      setResponse("Bir hata oluştu.");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Lumio AI 🌙</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nasıl hissediyorsun?"
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      />

      <button onClick={sendMessage}>
        Gönder
      </button>

      <p>{response}</p>
    </div>
  );
}