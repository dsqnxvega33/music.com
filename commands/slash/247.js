const colors = require("colors");
const { MessageEmbed } = require("discord.js");
const SlashCommand = require("../../lib/SlashCommand");

const command = new SlashCommand()
	.setName("247")
	.setDescription("防止機器人與 VC 斷開連接（切換）")
	.setRun(async (client, interaction, options) => {
		let channel = await client.getChannel(client, interaction);
		if (!channel) {
			return;
		}
		
		let player;
		if (client.manager) {
			player = client.manager.players.get(interaction.guild.id);
		} else {
			return interaction.reply({
				embeds: [
					new MessageEmbed()
						.setColor("RED")
						.setDescription("Lavalink節點未連接"),
				],
			});
		}
		
		if (!player) {
			return interaction.reply({
				embeds: [
					new MessageEmbed()
						.setColor("RED")
						.setDescription("There's nothing to play 24/7."),
				],
				ephemeral: true,
			});
		}
		
		let twentyFourSevenEmbed = new MessageEmbed().setColor(
			client.config.embedColor,
		);
		const twentyFourSeven = player.get("twentyFourSeven");
		
		if (!twentyFourSeven || twentyFourSeven === false) {
			player.set("twentyFourSeven", true);
		} else {
			player.set("twentyFourSeven", false);
		}
		twentyFourSevenEmbed
		  .setDescription(`**24/7 mode is** \`${!twentyFourSeven ? "ON" : "OFF"}\``)
		  .setFooter({
		    text: `機器人將 ${!twentyFourSeven ? "now" : "no longer"} 24/7 與語音頻道保持聯繫.`
      });
		client.warn(
			`Player: ${ player.options.guild } | [${ colors.blue(
				"24/7",
			) }] has been [${ colors.blue(
				!twentyFourSeven? "ENABLED" : "DISABLED",
			) }] in ${
				client.guilds.cache.get(player.options.guild)
					? client.guilds.cache.get(player.options.guild).name
					: "a guild"
			}`,
		);
		
		if (!player.playing && player.queue.totalSize === 0 && twentyFourSeven) {
			player.destroy();
		}
		
		return interaction.reply({ embeds: [twentyFourSevenEmbed] });
	});

module.exports = command;
// 檢查上面的訊息，它有點令人困惑。並且錯誤不被處理。可能應該修復。
// 好的，使用 catch ez kom follow meh ;_;
// 上面的訊息意味著錯誤，如果找不到它或花費太長時間，機器人就會崩潰
// 播放commanddddd，如果超時或需要1000年才能找到歌曲則崩潰
// OKIE，請在此處留下 idk 的評論
// 評論非常有用，247 好 :+1:
//二十四七=最佳；
