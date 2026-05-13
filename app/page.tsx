"use client"

import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const handleRecommend = () => {
    setResult(`
📖 推薦書籍：原子習慣

✨ 推薦理由：
你看起來想提升自己，而且希望用比較輕鬆的方式開始改變生活。

🕒 適合閱讀時機：
晚上放鬆時慢慢看。
`)
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
      <h1 style={{ fontSize: 32 }}>
        AI 電子書推薦器 📚
      </h1>

      <p style={{ marginTop: 10, opacity: 0.7 }}>
        描述你現在想看的內容
      </p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="例如：最近有點迷茫，想看能讓人重新振作的書..."
        style={{
          width: "100%",
          height: 140,
          marginTop: 20,
          padding: 16,
          borderRadius: 12,
          border: "none",
          fontSize: 16
        }}
      />

      <button
        onClick={handleRecommend}
        style={{
          marginTop: 20,
          padding: "14px 24px",
          borderRadius: 12,
          border: "none",
          background: "#4f46e5",
          color: "white",
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        開始推薦 ✨
      </button>

      {result && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            borderRadius: 16,
            background: "#1f1f1f",
            whiteSpace: "pre-wrap",
            lineHeight: 1.8
          }}
        >
          {result}
        </div>
      )}
    </main>
  )
}