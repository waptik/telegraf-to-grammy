import { CHAT_ID, isDev, WEBHOOK_URL } from "../constants";
import { bot } from "./grammy";

const startTelegramBotInDev = async () => {
  if (!bot.isInited()) {
    bot
      .start({
        onStart: ({ username }) => {
          console.info({
            msg: "bot running...",
            username,
            at: new Date(),
          });
        },
      })
      .catch(console.error);
  }
};

const startTelegramBotInProduction = async () => {
  try {
    console.info("fetching  webhook info");
    const webhookInfo = await bot.api.getWebhookInfo();
    console.info(`existing webhook info fetched: ${webhookInfo.url}`);

    if (webhookInfo.url === WEBHOOK_URL) {
      console.info("Sorry, same url, i don't wanna waste my time here.");
    } else {
      console.info("deleting existing webhook");
      await bot.api.deleteWebhook();
      console.info("existing webhook deleted");

      console.info(`setting new webhook to: ${WEBHOOK_URL}`);
      await bot.api.setWebhook(WEBHOOK_URL);
      console.info(`bot webhook set to: ${WEBHOOK_URL}`);

      await bot.api.sendMessage(
        CHAT_ID,
        `Hi admin. Webhook is now connected at ${WEBHOOK_URL}`
      );
    }
  } catch (err) {
    console.error("failed to delete/set webhook url", err);
  }
};

export const startBot = async () =>
  isDev ? startTelegramBotInDev() : startTelegramBotInProduction();
