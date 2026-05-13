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
                "你是一個專業電子書推薦助手，請推薦一本適合的書並簡短說明理由。"
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

    console.log(data)

    if (!data.choices || !data.choices[0]) {
      return Response.json({
        result: "AI 暫時沒有回應，請稍後再試。"
      })
    }

    return Response.json({
      result: data.choices[0].message.content
    })
  }