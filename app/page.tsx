"use client"

import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState("")

  const handleRecommend = async () => {
    if (!input.trim()) return

    setLoading(true)
    setResult("")

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          input
        })
      })

      const data = await response.json()

      setResult(data.result)
    } catch (error) {
      setResult("AI 回應失敗，請稍後再試。")
    }

    setLoading(false)
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: 24
      }}
    >
      <h1
        style={{
          fontSize: 42,
          lineHeight: 1.3
        }}
      >
        AI 書籍推薦系統
      </h1>

      <p
        style={{
          marginTop: 10,
          opacity: 0.7,
          fontSize: 18
        }}
      >
        描述你現在想看的內容
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="例如：最近有點迷茫，想看能讓人重新振作的書..."
        style={{
          width: "100%",
          height: 160,
          marginTop: 24,
          padding: 18,
          borderRadius: 16,
          border: "1px solid #333",
          background: "#1a1a1a",
          color: "white",
          fontSize: 16,
          outline: "none",
          resize: "none"
        }}
      />

<button
  onClick={handleRecommend}
  disabled={loading}
  style={{
    marginTop: 24,
    padding: "16px 28px",
    borderRadius: 16,
    border: "none",
    background: loading ? "#5b52d6" : "#4f46e5",
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.8 : 1,
    transition: "0.2s",
    display: "flex",
    alignItems: "center",
    gap: 10
  }}
>
  {loading && (
    <div
      style={{
        width: 16,
        height: 16,
        border: "2px solid rgba(255,255,255,0.4)",
        borderTop: "2px solid white",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }}
    />
  )}

  {loading ? "AI 分析中..." : "開始推薦"}
</button>

      {result && (
        <div
          style={{
            marginTop: 32,
            padding: 24,
            borderRadius: 24,
            background: "#1b1b1b",
            border: "1px solid #333",
            whiteSpace: "pre-wrap",
            lineHeight: 1.8
          }}
        >
          {result}
        </div>
      )}

      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
      
    </main>
  )
}