const express = require("express")
const cors = require("cors")
const fetch = global.fetch || require("node-fetch")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Simple request logger
app.use((req, res, next) => {
  const startedAt = Date.now()
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`)
  res.on("finish", () => {
    const ms = Date.now() - startedAt
    console.log(`↳ ${res.statusCode} ${res.statusMessage || ""} (${ms}ms)`) 
  })
  next()
})

app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = String(req.body?.message || "").trim()
    const bodyMessages = Array.isArray(req.body?.messages) ? req.body.messages : null
    if (!userMessage && !(bodyMessages && bodyMessages.length)) {
      return res.status(400).json({ error: "Message requis" })
    }

    const model = process.env.OPENROUTER_MODEL || "anthropic/claude-haiku-4.5"
    const userSnippet = (userMessage || "").slice(0, 160).replace(/\n/g, " ")
    const histCount = bodyMessages ? bodyMessages.length : 0
    console.log(`→ OpenRouter request | model=${model} | history=${histCount} | user=\"${userSnippet}${(userMessage||"").length>160?"…":""}\"`)
    const messagesPayload = [
      { role: "system", content: "Tu es un assistant utile et concis." },
    ]
    if (bodyMessages && histCount) {
      for (const m of bodyMessages) {
        if (m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string") {
          messagesPayload.push({ role: m.role, content: m.content })
        }
      }
    } else if (userMessage) {
      messagesPayload.push({ role: "user", content: userMessage })
    }
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY || ""}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.APP_URL || "http://localhost:5173",
        "X-Title": process.env.APP_NAME || "Portfolio Chat",
      },
      body: JSON.stringify({ model, messages: messagesPayload }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error(`OpenRouter error ${response.status}: ${err.slice(0, 300)}${err.length>300?"…":""}`)
      return res.status(500).json({ error: "OpenRouter error", detail: err })
    }

    const data = await response.json()
    const content = data?.choices?.[0]?.message?.content || ""
    const aiSnippet = content.slice(0, 180).replace(/\n/g, " ")
    console.log(`← OpenRouter response | ${aiSnippet}${content.length>180?"…":""}`)
    return res.json({ content })
  } catch (e) {
    console.error("Server error:", e && (e.stack || e.message || e))
    return res.status(500).json({ error: "Server error" })
  }
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
  console.log(`Using model: ${process.env.OPENROUTER_MODEL || "anthropic/claude-haiku-4.5"}`)
})


