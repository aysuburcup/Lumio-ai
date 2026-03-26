export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#F4F2FF",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>

      <div style={{
        width: "350px",
        background: "white",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 10px 30px rgba(91,75,168,0.1)"
      }}>

        {/* Üst başlık */}
        <h2 style={{
          textAlign: "center",
          color: "#5B4BA8",
          marginBottom: "20px"
        }}>
          Lumio AI 🌙
        </h2>

        {/* Soru */}
        <p style={{
          textAlign: "center",
          marginBottom: "20px"
        }}>
          Bugün nasıl hissediyorsun?
        </p>

        {/* Emoji grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px"
        }}>
          {["😊","😢","😡","😨","😐","🤷"].map((emoji, i) => (
            <button key={i} style={{
              fontSize: "24px",
              padding: "15px",
              borderRadius: "12px",
              border: "none",
              background: "#F4F2FF",
              cursor: "pointer"
            }}>
              {emoji}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}