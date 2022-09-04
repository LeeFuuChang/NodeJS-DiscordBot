const Discord = require('discord.js');
const path = require("node:path");
const fs = require("node:fs");

const token = "MTAxMTk0NjE3NjUzNjM5NTc3Ng.GzgXgt.TdMaL_kSJPGVLEKzKmUeemyJwCbJQcp8LNDSnQ";

const client = new Discord.Client();
client.command = new Discord.Collection();

const processMessage = require(".\\preprocess.js");




const commandPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandPath).filter(
    filename => filename.endsWith(".js")
)
for(const file of commandFiles){
    const fileCommandName = file.replace(".js", "");
    const commandFilePath = path.join(commandPath, file);
    const commandFunction = require(commandFilePath).commandFunction;

    client.command.set(fileCommandName, commandFunction)
}
console.log("Loaded Commands: ", commandFiles)




client.once('ready', () => {
    console.log(`機器人已經以 ${client.user.tag} 的身分上線`);
    client.user.setActivity("Discord.com");
});

client.on("message", (msgObj)=>{
    if(msgObj.author.id === client.user.id) return;

    const processedMessage = processMessage(msgObj);

    if( !processedMessage.isCommand ) return;

    const commandFunction = client.command.get(
        processedMessage.commandName
    );

    commandFunction(msgObj, processedMessage.args);
});

client.login(token);
