"use client"

import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  const handleRecommend = () => {
    const text = input.toLowerCase()
  
    if (text.includes("懸疑")) {
      setResult(`
  推薦書籍：東方快車謀殺案
  
  推薦理由：
  適合喜歡推理與緊張氛圍的讀者。
  `)
    } else if (text.includes("愛情")) {
      setResult(`
  推薦書籍：傲慢與偏見
  
  推薦理由：
  適合喜歡細膩情感與角色互動的讀者。
  `)
    } else if (text.includes("成長")) {
      setResult(`
  推薦書籍：原子習慣
  
  推薦理由：
  適合想改善生活與建立習慣的人。
  `)
    } else {
      setResult(`
  推薦書籍：被討厭的勇氣
  
  推薦理由：
  適合作為通用型人生思考閱讀。
  `)
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