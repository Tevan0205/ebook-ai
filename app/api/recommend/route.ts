export async function POST(req: Request) {
  const body = await req.json()

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b:free",
        messages: [
          {
            role: "system",
            content:
              "你是一個書籍推薦助手。請只回傳 JSON 格式，不要有 markdown。格式必須是：{\"title\":\"書名\",\"author\":\"作者\",\"reason\":\"推薦理由\"}"
          },
          {
            role: "user",
            content: body.input
          }
        ]
      })
    }
  )

  const data = await response.json()

  const content =
    data.choices?.[0]?.message?.content || "{}"

  try {
    const parsed = JSON.parse(content)

    return Response.json({
      title: parsed.title || "未知書名",
      author: parsed.author || "未知作者",
      reason: parsed.reason || "沒有推薦理由"
    })
  } catch {
    return Response.json({
      title: "AI 回應格式錯誤",
      author: "-",
      reason: content
    })
  }
}