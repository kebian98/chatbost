const fs = require("fs");
const login = require("facebook-chat-api");

login({email: "kebian98@gmail.com	", password: "faker98"}, (err, api) => {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));

	api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent", listenEvents: true});
	api.listen(function callback(err, message)
	{		
		if(message.body==="/Getid"||message.body==="/getid"||message.body==="/get id"||message.body==="/Get id"||message.body==="/Get ID") {
			console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
			api.sendMessage(message.senderID, message.threadID);
                        api.sendMessage("Your ID: ", message.threadID); 			
		} 
		//Ví dụ nếu mình set message.body = /Jarvis thì bot sẽ print api.sendMessage = Send bobs n vegena... 
		else if(message.body === "/faker"||message.body==="/faker") { 
			console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
			api.sendMessage("Send bobs n vegena. \nEnter /NotFemale if u dont have bobs n vegena", message.threadID); 
			api.sendMessage("Please read the following sentence to activate Jarvis", message.threadID);
			return;
		}
		//message.body = tin nhắn bạn send cho bot
		else if (message.body){
			console.log("FB.com/" + message.threadID + ' - Message: '+message.body);
			api.sendMessage("\n \n🙂 Đây là Faker AI. \n- Sư phụ của Faker đang bế quan tu luyện, sẽ rep ngay khi sư phụ xuống núi \n- Nếu muốn chat với Faker gõ /faker. \n- Tin nhắn của bạn: " + message.body, message.threadID);
	        return;
		}
	});
});
