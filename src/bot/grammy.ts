import { Bot } from "grammy";
import { BOT_TOKEN } from "../constants";

if (!BOT_TOKEN) throw new Error("Please add a bot token");
export const bot = new Bot(BOT_TOKEN);

bot.hears("Number", (ctx) => {
  ctx.reply("+989361579708!");
});

bot.command("start", (ctx) => {
  ctx.reply("Welcome!");
});
