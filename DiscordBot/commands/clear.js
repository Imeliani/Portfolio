module.exports = {
    name:"clear",
    description:"this is for clearing shit",
    async execute(message, args){
        if(!args[0]) return message.reply("please enter the ammount you wanna clear");
        if(isNaN(args[0])) return message.reply("not a number bro, cringe");

        if(args[0]>100) return message.reply("can't delete more than 100");
        if(args[0]<1) return message.reply("cant delete less than 1");


        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
           message.channel.bulkDelete(messages);
        });

    }

};