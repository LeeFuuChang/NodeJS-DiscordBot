const commandPrefix = "/";

class ProcessedMessage {
    constructor(isCommand, message, msgObj) {
        this.data = msgObj;
        this.message = message;
        this.isCommand = isCommand;

        if(isCommand){
            this.loadCommandArgs(message);
        }
    }
    loadCommandArgs = (message)=>{
        this.args = message.split(/ +/g);
        this.commandName = this.args.shift();
    }
}

function processMessage(msgObj){
    const message = msgObj.content.trim();
    const isCommand = message.startsWith(commandPrefix);
    return new ProcessedMessage(isCommand,
        message.slice(
            commandPrefix.length * isCommand
        ), msgObj
    )
}

module.exports = processMessage;