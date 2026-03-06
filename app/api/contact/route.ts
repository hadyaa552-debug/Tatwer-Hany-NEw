import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    const res = await fetch("https://formsubmit.co/ajax/ahany9710@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        phone,
        email,
        message,
        _cc: "apkzoz85@gmail.com",
        _captcha: "false",
        _template: "table",
      }),
    })

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to send" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
