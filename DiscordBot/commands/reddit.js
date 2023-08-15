module.exports= {
    name: "reddit",
    description: "this is a reddit command",
    execute(message, args){


        if(message.member.roles.cache.some(r => r.name === "DJ")){
            message.channel.send("https://reddit.com/r/eyebleach");

        } else{
            message.channel.send("Brother, you dont have DJ role, please reconsider your life choices");
            //message.member.roles.add("724790055893336087").catch(console.error); this is for skai jackson
        }
    }
};