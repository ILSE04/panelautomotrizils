<!--console.log("Hola mundo");-->

var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

const APP_TOKEN = 'EAAPblDUMA5UBAPuH2SZCBjntjC6mPAPDYZAAMnssCPndne7jtQ7DX33pvnZAfpjP3lzgdeqrFLpReb8kru081x9N5MAklbPdBZBgNkIfctnMhIyiVYRWlyswBSNuCiIs9dwdFp8Ow1Qv5ZCTJNzeCRuqsie4QOZCDvHPntoAGhnwZDZD';

var app = express();
app.use(bodyParser.json());

app.listen(3000, function(){
	console.log("El servidor se encuentra en el puerto 3000");
});

app.get('/', function (req, res){
	res.send('Bienvenido al taller');
});

app.get('/webhook', function (req, res){
	
	if(req.query['hub.verify_token'] === 'test_token_say_your_name'){
		res.send(req.query['hub.challenge']);
	}else{
		res.send('Tu no debes de entrar');
	}

});


app.post('/webhook', function (req, res){

var data = req.body;
if (data.object == 'page') {
console.log(data);
data.entry.forEach(function(pageEntry){
	pageEntry.messaging.forEach(function(messagingEvent){


		if (messagingEvent.message){
			receiveMessage(messagingEvent);
		}

	});
});
res.sendStatus(200);

}
});


function receiveMessage(event){
var senderID = event.sender.id;
var messageText = event.message.text;

evaluateMessage(senderID, messageText);
}


function evaluateMessage(recipientId, message){
	var finalMessage = '';

console.log(recipientId, message);



finalMessage = 'Solo repito cosas: ' + message;
	if (isContain(message, 'Hola buen día, tardes, noches')) 
		finalMessage = '¿En que le podemos ayudar?';
		
	if (isContain(message, 'Audi')) 
		finalMessage = 'Por el momento no hay Audis';

	if (isContain(message, 'BMW')) 
		finalMessage = 'Por el momento no hay BMW';

	if (isContain(message, 'Audi')) {
		finalMessage = "Tenemos unidades 2010, 2011 ¿Cual le interesa?";
		if (isContain(message, '2010')) 
		finalMessage = 'Contamos con 8 unidades desde $141,800 su version es Luxury, 1.8T, 160HP, TA, piel, RA-17';
		if (isContain(message, '2011')) 
		finalMessage = 'Contamos con 5 uniddes desde $150,300 su version es Sport, 2.0T, 180HP, TA, piel, RA-18';
		
	

	if (isContain(message, 'BMW')) {
		finalMessage = "Tenemos unidades 2012, 2014 ¿Cual le interesa?";
		if (isContain(message, '2012')) 
		finalMessage = 'Contamos con 8 unidades desde $270,000 BMW Serie 3 335iA M Sport';
	if (isContain(message, '2015')) 
		finalMessage = 'Contamos con 3 uniddes desde $799,900 BMW Serie M M3 Sedán Aut';
	}
	


		
	

	sendMessageText(recipientId, finalMessage);
}

function sendMessageText(recipientId, message){
	var messageData = {
		recipient : {
			id: recipientId
		},
		message: {
			text: message
		}
	};
	callSendAPI(messageData);
}

function callSendAPI(messageData){

	request({
		uri: 'https://graph.facebook.com/v2.6/me/messages',
		qs: { access_token : APP_TOKEN },
		method: 'POST',
		json: messageData
	}, function (error, response, data){

console.log(messageData, error, data);

		if (error){
			console.log('No es posible enviar el mensaje');
		}else{
			console.log("El mensaje fue enviado");
		}
	});
}

function isContain(sentence, word){
	return sentence.indexOf(word) > -1;
}