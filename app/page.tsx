"use client"

import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState({
    title: "",
    reason: ""
  })

  const handleRecommend = async () => {
    setLoading(true)

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    )

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
          background: "#4f46e5",
          color: "white",
          fontSize: 16,
          cursor: "pointer",
          opacity: loading ? 0.6 : 1,
          transition: "0.2s"
        }}
      >
        {loading ? "分析中..." : "開始推薦"}
      </button>

      {result.title && (
        <div
          style={{
            marginTop: 32,
            padding: 24,
            borderRadius: 24,
            background: "#1b1b1b",
            border: "1px solid #333"
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: "#888",
              marginBottom: 12
            }}
          >
            推薦書籍
          </div>

          <h2
            style={{
              fontSize: 30,
              marginBottom: 16
            }}
          >
            {result.title}
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: "#ccc",
              fontSize: 16
            }}
          >
            {result.reason}
          </p>
        </div>
      )}
    </main>
  )
}