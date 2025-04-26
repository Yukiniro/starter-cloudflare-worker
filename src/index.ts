import { Hono } from 'hono'
import { env } from 'hono/adapter'

type Bindings = {
  PROMPT: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.all('/prompt', (c) => {
  const prompt = env(c).PROMPT
  return c.text(prompt || "No prompt!")
})

export default app
