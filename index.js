const { EmbedBuilder, WebhookClient } = require('discord.js');

const webhookClient = new WebhookClient({
    id: process.env.DC_WEBHOOK_ID,
    token: process.env.DC_WEBHOOK_TOKEN
});

const embed = new EmbedBuilder()
    .setTitle("我是主題")
    .setColor(0x00ffff)
    .setDescription("我是內容...大家好");

webhookClient.send({
    content: "這是一個Webhook測試 from node.js",
    //username: 'some-username',
    //avatarURL: 'https://i.imgur.com/AfFp7pu.png',
    embeds: [embed],
});

// const threadId = '1081503057801650196';

// webhookClient.editMessage(threadId, {
// 	content: 'Edited 2!',
// 	embeds: [embed],
// });

// (async () => {
//     await webhookClient.deleteMessage(threadId);
// })();
