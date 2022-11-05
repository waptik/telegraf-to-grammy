import express from "express";
import { webhookCallback } from "grammy";
import dotenv from "dotenv";
dotenv.config();

import { bot } from "./bot/grammy";
import { startBot } from "./bot/start";
import { BOT_TOKEN, PORT } from "./constants";

const app = express();

app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
app.use(express.json());
app.use(`/${BOT_TOKEN}`, webhookCallback(bot));

//async await
app.post(`/${BOT_TOKEN}`, (req, res) => {
  try {
    console.log("reqbody", req.body);
    res.json({ message: req.body });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/", async (_, res) => {
  res.json({ Hello: "World", env: process.env.NODE_ENV });
});

app.listen(PORT, async () => {
  await startBot().catch(console.error);
  console.log(`Example app listening at http://localhost:${PORT}`);
});
