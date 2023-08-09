const { Client, GatewayIntentBits, WebhookClient } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    // Add other necessary intents here
  ],
});

const TOKEN = 'YOUR_BOT_TOKEN';
const WEBHOOK_URL = 'YOUR_WEBHOOK_URL';

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  // Check if the message indicates card drop
  if (message.content.includes('is dropping') && message.content.includes('cards!')) {
    // Extract and process card data
    const cardData = extractCardData(message.content);

    // Process card data further if needed
    // For this example, we'll just log the card data
    console.log('Card Data:', cardData);
  }
});

function extractCardData(content) {
  // Implement your card data extraction logic here
  // This function should analyze the message content and extract card names and other relevant data
  // Return an array of objects, each containing card information
  // Example: [{ name: 'Card1', rarity: 'Common' }, { name: 'Card2', rarity: 'Rare' }, ...]
  // Customize this based on how the card data is presented in your messages.
  // For this example, let's assume cards are listed as "CardName (Rarity)"
  const cardRegex = /(\w+)\s+\(Rarity:\s+(\w+)\)/g;
  const cardData = [];
  let match;
  while ((match = cardRegex.exec(content)) !== null) {
    const cardName = match[1];
    const rarity = match[2];
    cardData.push({ name: cardName, rarity: rarity });
  }
  return cardData;
}

client.login(TOKEN);
