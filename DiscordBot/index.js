const Discord = require('Discord.js');

const client = new Discord.Client();

const prefix = ".";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
};

client.once("ready", () => {
    console.log("Stuffer is online!");
});

client.on("message", message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "ping"){
        client.commands.get("ping").execute(message, args);
    } else if(command === "reddit"){
        client.commands.get("reddit").execute(message, args);
    } else if(command === "whereiswill"){
        client.commands.get("whereiswill").execute(message, args, Discord);
    } else if(command === "findfag"){
        message.channel.send("Daniel Makhlin appears to be the only fag here :rainbow_flag:");
    } else if(command === "clear"){
        client.commands.get("clear").execute(message, args);
    } else if(command === "explainjoke"){
        client.commands.get("explainjoke").execute(message, args);
    } else if(command === "wipeserver"){
        client.commands.get("kick").execute(message, args);
    } else if(command === "jury"){
        client.commands.get("jury").execute(message, args);
    }
});




client.login("NzkzMzUzNjM5NTY5MjYwNTU1.X-rCJw.EcwnIgJCJQVSEK3zg03oxwrnlKM")