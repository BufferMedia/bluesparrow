import * as jq from 'jquery';

class RequestModel {

	constructor(url, method="GET"){
		this.method = method;
		this.url = window.location.protocol+"//bluesparrowapi.herokuapp.com"+url;
		this.client_secret = "KTgfePuWtAK99GN0DBp6lfomMxJAv5JIU5RomQnA";
		this.options = {}
		this.addOption("method", method);
		this.addOption("redirect", "follow");
		this.addOption("mode", "no-cors");
	}

	addOption(key, value){
		this.options[key] = value;
	}
	
	async send(data, callback, failure){
		
		var defaultToken = {"grant_type":"password","client_id":"2","client_secret":"KTgfePuWtAK99GN0DBp6lfomMxJAv5JIU5RomQnA","username":"admin0@gmail.com","password":"adminpassword","scope":"*"};
		const token = Object.assign(defaultToken, data);
		const apiUrl = this.url;
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": apiUrl,
		  "method": "POST",
		  "headers": {
		    "Accept": "application/json",
		    "Content-Type": "application/json",
		    
		    "Cache-Control": "no-cache",
		    "Postman-Token": "6155adee-9c5b-498a-80bb-ff626ab0e974,1f9925c0-4384-45d4-8ecf-20beafea8515",
		    
		    "cache-control": "no-cache"
		  },
		  "processData": false,
		  "data": JSON.stringify(token)
		}

		jq.ajax(settings).done(function (response) {
		  callback(response);
		})
		.fail(failure);

	}
}

class LoginModel extends RequestModel{

	isLogged(){
		const Bearer = localStorage.getItem("Bearer")
		const token_type = localStorage.getItem("token_type")
		const refresh = localStorage.getItem("refresh")
		var time_expire = localStorage.getItem("time_expires")
		//console.log(`Bearer:${Bearer}, token: ${token_type}, refresh:${refresh}, time_ex:${time_expire}`)
		if(Bearer == null || token_type == null || refresh == null){
			return false
		}

		time_expire = parseInt(time_expire);
		//console.log(`Got to this point time:${time_expire}`)
		if(time_expire != NaN){
			/*
			const today = new Date()
			const todayStamp = today.getTime();
			const expired = (todayStamp >= time_expire) ? true : false;
			if(expired)return false;
			*/
		}
		return true;
	}

	constructor(url=null, username=null, password=null){

		super(url, "POST");
		const data = {
			"grant_type":"password",
			"client_id":"2",
			"client_secret":"KTgfePuWtAK99GN0DBp6lfomMxJAv5JIU5RomQnA",
			"username":username,
			"password":password,
			"scope":"*"
		}

		this.addOption("headers", {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Access-Control-Request-Method": "POST"
		});

		this.addOption("body", JSON.stringify(data));

	}
}

export default LoginModel;
