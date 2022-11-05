import express from "express";
import { webhookCallback } from "grammy";
import dotenv from "dotenv";
dotenv.config();

import { bot } from "./bot/grammy";
import { startBot } from "./bot/start";
import { BOT_TOKEN } from "./constants";

bot.hears("Number", (ctx) => {
  ctx.reply("+989361579708!");
});

bot.command("start", (ctx) => {
  ctx.reply("Welcome!");
});

const app = express();
const port = process.env.PORT || 3333;

app.post(`/${BOT_TOKEN}`, webhookCallback(bot, "express"));

app.get("/", async (_, res) => {
  res.json({ Hello: "World" });
});

app.get("/start", async (_, res) => {
  await startBot().catch(console.error);
  res.json("Bot started");
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
