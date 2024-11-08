<h1 align="center"><img src="./assets/logo.gif" width="30px"> Discord音樂機器人 <img src="./assets/logo.gif" width="30px"></h1>

## ✨最新更新

你從中得到什麼？讓我們解釋一下：
 - 完全模組化的docker環境，更容易開發和部署
 - 工作儀表板！
 - 資料庫集成，讓您保存您最喜愛的歌曲
 - 整合自架式Lavalink
 - 專用查詢頻道
 - 更多指令和功能
 - 還有更多即將推出！

## 🚧 | 先決條件

- [Node.js 16+](https://nodejs.org/en/download/)
- [Lavalink Server](https://code.darrennathanael.com/how-to-lavalink)
- 您需要執行`npm run deploy`或`yarn deploy`。初始化斜杠命令。 _您可以在您的電腦上執行此操作
 本地_

> 注意：音樂功能需要 Lavalink。您需要有一個可用的 Lavalink 伺服器才能使機器人工作。

## 📝 | Important Note if you're Switching from v4 to v5

1. Download and configure v5 in a seperate folder.
2. Kick your bot out of your server.
3. Reinvite the Bot with the right
   scopes. [Example Invite URL (Change CLIENT_ID)](https://discord.com/oauth2/authorize?client_id=CLIENT_ID&permissions=277083450689&scope=bot%20applications.commands)
4. Run `npm run deploy` or `yarn deploy` to initialize the slash commands. _You can do this on your pc locally_

## 📝 | Tutorial

### 🐳 Docker
You should configure the `config.js` file with the host `"lavalink"`, using the same `password` and `port` as specified in `docker/application.yml`.

Build and start bot and lavalink
```sh
docker-compose up -d --build
```
### 💪🏻 Non-Docker
> The `config.js` file should be configured first. Don't forget to add a lavalink host

Install all dependencies and deploy Slash Commands
```sh
npm install
npm run deploy
```
Start the bot
```sh
node index.js
```

## 📝 | [Support Server](https://discord.gg/sbySMS7m3v)

If you have major coding issues with this bot, please join and ask for help.

## 📸 | Screenshots

Soon

## 🚀 | Deploy

[![Deploy to heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/SudhanPlayz/Discord-MusicBot/tree/v5)
[![Open in Gitpod](https://camo.githubusercontent.com/76e60919474807718793857d8eb615e7a50b18b04050577e5a35c19421f260a3/68747470733a2f2f676974706f642e696f2f627574746f6e2f6f70656e2d696e2d676974706f642e737667)](https://gitpod.io/#https://github.com/SudhanPlayz/Discord-MusicBot/tree/v5)

## ✨ | Contributors

Contributions are always welcomed :D Make sure to follow [Contributing.md](/CONTRIBUTING.md)

<a href="https://github.com/SudhanPlayz/Discord-MusicBot/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=SudhanPlayz/Discord-MusicBot" />
</a>

## 🌟 | Made with

- [Discord.js](https://discord.js.org/)
- [Lavalink](https://github.com/freyacodes/Lavalink) with erela.js
- [Express](https://expressjs.com/)
- [Next JS](https://nextjs.org/)
- [Next UI](https://nextui.org)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
