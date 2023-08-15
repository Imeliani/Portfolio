module.exports= {
    name: "whereiswill",
    description: "this is the command that tells you where will is",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#304281")
            .setTitle("This is where William Kairouz resides")
            .setURL("https://goo.gl/maps/amNMWYH6Zz47maN87")
            .setDescription("this is a embed to remind people where will is")
            .addFields(
                {name: "Phone Number:", value: "514-724-6985"}
            )
            .setImage("https://upload.wikimedia.org/wikipedia/commons/5/5f/Gibeau_Orange_Julep01.JPG")
            .setFooter("Reminder, this only works when will is home, as my tracker can't track him outside of home")

        message.channel.send(newEmbed);

    }

};