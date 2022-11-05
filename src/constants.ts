export const isDev = process.env.NODE_ENV === "development";
export const BOT_TOKEN = (
  isDev ? process.env.TEST_BOT_TOKEN : process.env.BOT_TOKEN
) as string;
export const WEBHOOK_URL = process.env.WEBHOOK_URL as string;
export const CHAT_ID = process.env.CHAT_ID as string;
export const PORT = process.env.PORT || 3333;
