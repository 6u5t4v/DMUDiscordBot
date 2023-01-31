const { SlashCommandBuilder } = require('discord.js');
const { canvasToken } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lektier')
        .setDescription('Se hvad vi har for af lektier'),
    async execute(interaction) {
        const data = await getCanvasData();
        await interaction.reply('Lektier yes yes');
    },
};

// create a function the makes a get request to the canvas api
// and returns the data as a json object
async function getCanvasData() {
    const url = "https://eaaa.instructure.com";

    const response = await fetch(`${url}/api/v1/courses/15904/assignments?access_token=${canvasToken}`);
    const data = await response.json();

    console.log(data[0]['submissions_download_url']);
    return data;
}