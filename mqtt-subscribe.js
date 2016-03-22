var mqtt = require('mqtt');

var clientId = ['d', "{組織ID}", "{裝置類型}", "{裝置ID}"].join(':');
var iot_client = mqtt.connect("mqtt://{組織ID}.messaging.internetofthings.ibmcloud.com:1883",
					  {
						  "clientId" : clientId,
						  "keepalive" : 30,
						  "username" : "use-token-auth",
						  "password" : "{鑑別記號}"
					  });

iot_client.on('connect', function() {
	console.log('7688 Duo subscribe connected to IBM IoT Cloud.');
	iot_client.subscribe('iot-2/cmd/+/fmt/+');
});

iot_client.on("message", function(topic,payload){
	console.log('received topic:'+topic+', payload:'+payload);
});
