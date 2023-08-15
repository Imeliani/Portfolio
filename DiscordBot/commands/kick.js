module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.author;
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.reply("for attempting to deleted the server you are to be cast out!");
        }else{
            message.channel.send(`try again, didnt work!`);
       }
    }
};