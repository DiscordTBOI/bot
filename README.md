# DiscordTBOI discord bot

The discord bot (and TCP server) used to interact with the DiscordTBOA mod!

Get the mod itself [here](https://github.com/DiscordTBOI/client)!

## Features

**This project is WIP! Some of the mentioned features are not implemented yet!**

- Connect to a "The Binding of Isaac" game - ran either by you or a friend
- Execute debug commands from discord
- Let your server members make game decisions instead of you via polls! Let them:
    - Pick one out of four items from the item room
    - Pick which items you buy from the shop
    - Pick where you go after the womb

## Running

### Requirements

- [Latest LTS Node.js](https://nodejs.org/en/) 
- npm (Comes with node.js by default)
- [A discord bot token](https://discordpy.readthedocs.io/en/latest/discord.html)

### Steps

1. Clone, fork or download this repository.
2. Create a file called `config.json`, and put this inside it:

```js

{
    "token": "your_bot_token",
    "prefix": "b!",
    "port": 10032
}
```

Of course, replace `your_bot_token` with your actual bot token.

3. Open the console in the main folder (where `package.json` is) and run the following commands:
```
npm i
npm run start
```
The first command is going to install all the required dependencies, while the second is going to transpile the code and start the bot and TCP server. Now you should see your bot online!

If you have any trouble running the bot, feel free to contact `GoogleFeud#5048` on discord, or just create an issue here!

