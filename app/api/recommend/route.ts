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
              '你是一個書籍推薦助手。你只能回傳純 JSON，不准加 markdown、不准加說明文字。格式必須是：{"title":"書名","author":"作者","reason":"推薦理由"}'
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

  let content =
    data.choices?.[0]?.message?.content || "{}"

  content = content
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim()

  try {
    const parsed = JSON.parse(content)

    return Response.json({
      title: parsed.title || "未知書名",
      author: parsed.author || "未知作者",
      reason: parsed.reason || "沒有推薦理由"
    })
  } catch (error) {
    console.log(content)

    return Response.json({
      title: "AI 格式錯誤",
      author: "-",
      reason: content
    })
  }
}