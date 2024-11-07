const { SlashCommandBuilder } = require("@discordjs/builders");
const {
	CommandInteraction,
	CommandInteractionOptionResolver,
} = require("discord.js");
const DiscordMusicBot = require("./DiscordMusicBot");

class SlashCommand extends SlashCommandBuilder {
	constructor() {
		super();
		this.type = 1;
		return this;
	}
	
/**
  * 設定指令的執行
  * @param {(客戶端: DiscordMusicBot, 互動: CommandInteraction, 選項: CommandInteractionOptionResolver) => Promise<any>} 回調
  */
	setRun(callback) {
		this.run = callback;
		return this;
	}
}

module.exports = SlashCommand;
