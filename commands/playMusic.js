function commandFunction(msgObj, args){
    // ...
}
const description = `撥放音樂`;
const usage = `/playMusic {音樂連結}`;
module.exports = {
    commandFunction:commandFunction,
    description:description,
    usage:usage
};