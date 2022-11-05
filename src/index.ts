import express from "express";
import { webhookCallback } from "grammy";
import dotenv from "dotenv";
dotenv.config();

import { bot } from "./bot/grammy";
import { startBot } from "./bot/start";
import { isDev } from "./constants";

startBot().catch(console.error);

bot.hears("Number", (ctx) => {
  ctx.reply("+989361579708!");
});

const app = express();
const port = process.env.PORT || 3333;

if (!isDev) {
  app.use(webhookCallback(bot, "express"));
}

app.get("/", async (_, res) => {
  res.json({ Hello: "World" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
