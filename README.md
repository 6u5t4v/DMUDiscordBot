# Datamatiker Canvas Discord Bot
## Kør programmet
> 1. Create a discord bot on discord developer portal 
> 2. Skaf en bot token og client id
> 3. Gå ind på skolens canvas side og skaf en auth token. Se guide [Manual Token Generation](https://canvas.instructure.com/doc/api/file.oauth.html#manual-token-generation) 
> 4. Lav en `config.json` fil i root directory projekt med følgende indhold
````
{
    "token": "<bot token>",
    "clientId": "<client id>",
    "guildId": "<discords server guild id>",
    "canvasToken": "<canvas auth token>"
}
````
> 5. I terminalen skriv `npm install` for at installere nødvendige package
> 6. Første gang man starter botten skal man registrer bottens kommandoer, med `node deploy-commands.js`, dette skal også gøres hvis man tilføjer nogle nye.
> 7. Ayoo start botten med `node index.js`