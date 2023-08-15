module.exports= {
    name: "jury",
    description: "this is a reddit command",
    execute(message, args){


            message.member.roles.add("694263097237700738").catch(console.error);
    }
};