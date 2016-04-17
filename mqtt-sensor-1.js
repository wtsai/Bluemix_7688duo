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
	console.log('7688 Duo sensor connected to IBM IoT Cloud.');
	iot_client.publish('iot-2/evt/status/fmt/json', '{"d":{"status": "connected" }}');
	iot_client.publish('iot-2/evt/Temperature/fmt/sting', '-10');
});
