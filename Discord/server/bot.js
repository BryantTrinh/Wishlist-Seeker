const Discord = require('discord.js');
const dotenv = require('dotenv'); 
dotenv.config();


client.once('ready', () => {
    console.log('Wishlist Seeker is online.^-^ ');
});

client.login(process.env.BOT_TOKEN);
