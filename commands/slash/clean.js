const SlashCommand = require("../../lib/SlashCommand");

const command = new SlashCommand()
	.setName("clean")
	.setDescription("清除頻道中最後 100 個機器人訊息。")
	.addIntegerOption((option) =>
		option
			.setName("number")
			.setDescription("要刪除的訊息數。")
			.setMinValue(2).setMaxValue(100)
			.setRequired(false),
	)
	.setRun(async (client, interaction, options) => {
		
		await interaction.deferReply();
		let number = interaction.options.getInteger("number");
		number = number && number < 100? ++number : 100;
		
		
		interaction.channel.messages.fetch({
			limit: number,
		}).then((messages) => {
			const botMessages = [];
			messages.filter(m => m.author.id === client.user.id).forEach(msg => botMessages.push(msg))
			
			botMessages.shift();
			interaction.channel.bulkDelete(botMessages, true)
				.then(async deletedMessages => {
					//Filtering out messages that did not get deleted.
					messages = messages.filter(msg => {
						!deletedMessages.some(deletedMsg => deletedMsg == msg);
					});
					if (messages.size > 0) {
						client.log(`正在刪除 [${ messages.size }] 超過 14 天的消息。`)
						for (const msg of messages) {
							await msg.delete();
						}
					}
					
					await interaction.editReply({ embeds: [client.Embed(`:white_check_mark: | 刪除 ${ botMessages.length } 機器人訊息。`)] });
					setTimeout(() => {
						interaction.deleteReply();
					}, 5000);
				})
			
		});
	})

module.exports = command;
