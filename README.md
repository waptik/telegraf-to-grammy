---
title: Telegram Bot
description: An ExpressJS server with a Telegram bot
tags:
  - express
  - grammy
  - typescript
---

# Telegram bot example

This is an example of a [Telegram](https://telegram.org/) bot using [grammY](https://grammy.dev/) served by an [ExpressJS](https://expressjs.com/) server and deployed on [Railway](https://waptik.vercel.app/railway)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/wVafum?referralCode=h-Sxnl)

## ✨ Features

- grammY (library to interact with the Telegram bot API)
- Express
- TypeScript

## 💁‍♀️ How to use

Make sure you have [Railway CLI](https://docs.railway.app/develop/cli) installed on your machine before you proceed. The below instructions are for deploying using the CLI.

- Install dependencies `yarn`
- Connect to your Railway project, run `railway link`
- Start the development server, run `railway run yarn dev`
- To deploy the bot from the CLI, run `yarn deploy`

## 📝 Notes

This bot has been converted from using using [Telegraf](https://telegraf.js.org/) to now using [grammY](https://grammy.dev/). The original telegraf codebase can be found at https://github.com/masoud9708/telegram-bot
