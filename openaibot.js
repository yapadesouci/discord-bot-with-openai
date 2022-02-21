const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const { ask } = require("./ai.js");
require("dotenv").config();
const TOKEN = process.env.DISCORD_TOKEN;

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("messageCreate", async (message) => {
    if (message.content.startsWith("!ask")) {
        const prompt = message.content.substring(message.content.indexOf(' ') + 1);
        const answer = await ask(prompt);
        message.channel.send(answer);
    }
});

client.login(TOKEN);
