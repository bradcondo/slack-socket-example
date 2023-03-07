import { App, LogLevel } from '@slack/bolt'
import { resolve } from 'path'
import { config } from 'dotenv'

config({ path: resolve(__dirname, '.env') })

const app = new App({
  token: process.env.BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: LogLevel.DEBUG,
})

;(async () => {
  await app.start()
})()

app.message('hello', async ({ message, say }) => {
  await say("Hello!")
})
