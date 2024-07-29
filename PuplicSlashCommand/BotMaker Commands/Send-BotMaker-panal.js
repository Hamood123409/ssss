const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageEmbed, MessageSelectMenu } = require("discord.js");
const { Database } = require("st.db");
const config = require("../../config.json");
const owners = require("../../config");

const BOTMAKERDB = new Database("/Json-db/BotMaker/BOTMAKERDB");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("send-botmaker-panel")
    .setDescription("Send BotMaker panel"),
  botPermission: [],
  authorPermission: ["ADMINISTRATOR"],
  ownerOnly: false,
  async run(client, interaction) {
    try {
      if (interaction.guild.id === config.mainGuild) {
        if (!owners.owners.includes(interaction.user.id))
          return interaction.reply({ content: "لا يمكنك استخدام هذا الأمر." });

        const data = BOTMAKERDB.get(`BotMakerTicket_${interaction.guild.id}`);
        const Message = data.Message;
        const channelID = data.Channel;

        const oldmsg = BOTMAKERDB.get(`BOTMAKERTicketMSGID_${interaction.guild.id}`);
        const channel = client.channels.cache.get(channelID);

        if (!channel)
          return interaction.reply({ content: "**لم يتم تحديد روم التكت.**" });

        const Bot_Selector = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId("BOTMAKER_Selector")
            .setPlaceholder("Make your bot from here!")
            .setOptions([
              {
                label: "💰 Autoline",
                value: "Autoline_Selected",
                description: "To create a new autoline bot",
              },
              {
                label: "💰 Suggestion",
                value: "Suggestion_Selected",
                description: "To create new suggestion bot",
              },
              {
                label: "💰 Probot tax",
                value: "Tax_Selected",
                description: "To create new Auto tax bot",
              },
              {
                label: "💰 Credit",
                value: "Credit_Selected",
                description: "To create new Fake-Credit bot",
              },
              {
                label: "💰 Ticket",
                value: "Ticket_Selected",
                description: "To create new Ticket bot",
              },
              {
                label: "💰 System",
                value: "System_Selected",
                description: "To create new System bot",
              },
              {
                label: "💰 Brodcast",
                value: "Brodcast_Selected",
                description: "To create new Brodcast bot",
              },
              {
                label: "💰 Scammers",
                value: "Scammers_Selected",
                description: "To create new Scammers bot",
              },
              {
                label: "💰 Giveaway",
                value: "Giveaway_Selected",
                description: "To create new Giveaway bot",
              },
              {
                label: "💰 Probot-Prime",
                value: "Probot_selected",
                description: "To create new Fake Probot Premuim bot",
              },
              {
                label: "💰 Feedback",
                value: "Feedback_selected",
                description: "To create new Feedback bot",
              },
              {
                label: "💰 Logs",
                value: "Logs_selected",
                description: "To create new Logger bot",
              },
              {
                label: "💰 shop",
                value: "Shop_selected",
                description: "To create new Shop bot",
              },
              {
                label: "💰 Bot Maker Tier 1",
                value: "BOTMAKER_Tier1_Selected",
                description: "To subscribe to botmaker tier 1",
              },
              {
                label: "💰 Bot Maker Tier 2",
                value: "BOTMAKER_Tier2_Selected",
                description: "To subscribe to botmaker tier 2",
              },
              {
                label: "💰 Bot Maker Tier 3",
                value: "BOTMAKER_Tier3_Selected",
                description: "To subscribe to botmaker tier 3",
              },
              {
                label: "↻ Reset",
                value: "Reset_Selected",
                description: "To Reset the menu",
              },
            ])
        );

        if (data.Message) {
          channel.send({ embeds: [pricesEmb], components: [Bot_Selector] }).then((msg) => {
            BOTMAKERDB.set(`BOTMAKERTicketMSGID_${interaction.guild.id}`, msg.id);
            interaction.reply({ content: "BotMaker panel has been sent!" });
          });
        } else {
          channel.send({ components: [Bot_Selector] }).then((msg) => {
            BOTMAKERDB.set(`BOTMAKERTicketMSGID_${interaction.guild.id}`, msg.id);
            interaction.reply({ content: "BotMaker panel has been sent!" });
          });
        }
      } else {
        const data = BOTMAKERDB.get(`BotMakerTicket_${interaction.guild.id}`);
        const Message = data.Message;
        const channelID = data.Channel;

        const oldmsg = BOTMAKERDB.get(`BOTMAKERTicketMSGID_${interaction.guild.id}`);
        const channel = client.channels.cache.get(channelID);

        if (!channel)
          return interaction.reply({ content: "**لم يتم تحديد روم التكت.**" });

        const Bot_Embed = new MessageEmbed()
          .setColor(interaction.guild.me.displayHexColor)
          .setDescription(`${Message}`);

        const Bot_Selector = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId("BOTMAKER_Selector")
            .setPlaceholder("Make your bot from here!")
            .setOptions([
              {
                label: "Autoline",
                value: "Autoline_Selected",
                description: "To create a new autoline bot",
              },
              {
                label: "Suggestion",
                value: "Suggestion_Selected",
                description: "To create new suggestion bot",
              },
              {
                label: "Probot tax",
                value: "Tax_Selected",
                description: "To create new Auto tax bot",
              },
              {
                label: "Credit",
                value: "Credit_Selected",
                description: "To create new Credit bot",
              },
              {
                label: "Ticket",
                value: "Ticket_Selected",
                description: "To create new Ticket bot",
              },
              {
                label: "System",
                value: "System_Selected",
                description: "To create new System bot",
              },
              {
                label: "Brodcast",
                value: "Brodcast_Selected",
                description: "To create new Brodcast bot",
              },
              {
                label: "Scammers",
                value: "Scammers_Selected",
                description: "To create new Scammers bot",
              },
              {
                label: "Giveaway",
                value: "Giveaway_Selected",
                description: "To create new Giveaway bot",
              },
              {
                label: "Probot-Prime",
                value: "Probot_selected",
                description: "To create new Fake Probot Premuim bot",
              },
              {
                label: "Feedback",
                value: "Feedback_selected",
                description: "To create new Feedback bot",
              },
              {
                label: "Logs",
                value: "Logs_selected",
                description: "To create new Logger bot",
              },
              {
                label: "Reset",
                value: "Reset_Selected",
                description: "To Reset the menu",
              },
            ])
        );

        if (data.Message) {
          channel.send({ embeds: [pricesEmb], components: [Bot_Selector] }).then((msg) => {
            BOTMAKERDB.set(`BOTMAKERTicketMSGID_${interaction.guild.id}`, msg.id);
            interaction.reply({ content: "BotMaker panel has been sent!" });
          });
        } else {
          channel.send({ components: [Bot_Selector] }).then((msg) => {
            BOTMAKERDB.set(`BOTMAKERTicketMSGID_${interaction.guild.id}`, msg.id);
            interaction.reply({ content: "BotMaker panel has been sent!" });
          });
        }
      }
    } catch (error) {
      console.log(error);
      await interaction.reply("حدث خطأ.");
    }
  },
};
