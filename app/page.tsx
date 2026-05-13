"use client"

import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState({
    title: "",
    reason: ""
  })

  const handleRecommend = () => {
    const text = input.toLowerCase()
  
    if (text.includes("懸疑")) {
      setResult({
        title: "東方快車謀殺案",
        reason: "適合喜歡推理與緊張氛圍的讀者。"
      })
    } else if (text.includes("愛情")) {
      setResult({
        title: "傲慢與偏見",
        reason: "適合喜歡細膩情感與角色互動的讀者。"
      })
    } else if (text.includes("成長")) {
      setResult({
        title: "原子習慣",
        reason: "適合想改善生活與建立習慣的人。"
      })
    } else {
      setResult({
        title: "被討厭的勇氣",
        reason: "適合作為通用型人生思考閱讀。"
      })
    }
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

      {result.title && (
        <div
          style={{
            marginTop: 30,
            padding: 24,
            borderRadius: 20,
            background: "#1f1f1f",
            border: "1px solid #333"
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: "#888",
              marginBottom: 10
            }}
          >
            推薦書籍
          </div>

          <h2
            style={{
              fontSize: 28,
              marginBottom: 16
            }}
          >
            {result.title}
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: "#ccc"
            }}
          >
            {result.reason}
          </p>
        </div>
      )}
    </main>
  )
}