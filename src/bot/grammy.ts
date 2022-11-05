import { Bot } from "grammy";
import { BOT_TOKEN } from "../constants";

if (!BOT_TOKEN) throw new Error("Please add a bot token");
export const bot = new Bot(BOT_TOKEN);
