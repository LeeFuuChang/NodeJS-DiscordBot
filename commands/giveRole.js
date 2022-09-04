function commandFunction(msgObj, args){
    let user = msgObj.guild.members.cache.get(
        msgObj.author.id
    );
    console.log(user);
    let role = msgObj.guild.roles.cache.find(
        r => r.name === args[0]
    );
    if( !role ) return;
    user.roles.add(role);
}
const description = `給予使用者身分組`;
const usage = `/giveRole {身分組名稱}`;
module.exports = {
    commandFunction:commandFunction,
    description:description,
    usage:usage
};