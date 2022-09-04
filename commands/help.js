const path = require('node:path');
const fs = require('node:fs');

const commandFiles = fs.readdirSync(__dirname).filter(
    filename => filename.endsWith(".js")
)

function commandFunction(msgObj, args){
    for(const file of commandFiles){
        const commandFilePath = path.join(__dirname, file);
        const command = require(commandFilePath);

        msgObj.channel.send(command.usage);
        msgObj.channel.send(command.description);
    }
}
const description = `機器人使用教學`;
const usage = `/help`;
module.exports = {
    commandFunction:commandFunction,
    description:description,
    usage:usage
};