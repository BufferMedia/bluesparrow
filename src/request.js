import * as jq from 'jquery';
import axios from './axios'


class RequestModel {

	constructor(url, method="GET"){
		this.method = method;
		this.url = window.location.protocol+"//bluesparrowapi.herokuapp.com"+url;
		this.client_secret = "KTgfePuWtAK99GN0DBp6lfomMxJAv5JIU5RomQnA";
		this.options = {}
		this.addOption("method", method);
		this.addOption("redirect", "follow");
		this.addOption("mode", "no-cors");

		const auth_token = axios.getHeaders();

		this.headers = auth_token ? {
			'Content-Type': 'application/json',
			'Authorization': "Bearer " + auth_token.bearer,
		} : {};

		this.addOption('header', this.headers);
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
