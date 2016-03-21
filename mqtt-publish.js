var mqtt = require('mqtt');

var clientId = ['d', "{網域}", "{裝置類型}", "{裝置ID}"].join(':');
var iot_client = mqtt.connect("mqtt://{網域}.messaging.internetofthings.ibmcloud.com:1883",
					  {
						  "clientId" : clientId,
						  "keepalive" : 30,
						  "username" : "use-token-auth",
						  "password" : "{裝置記號Token}"
					  });

iot_client.on('connect', function() {
	console.log('7688 Duo client connected to IBM IoT Cloud.');
	iot_client.publish('iot-2/evt/status/fmt/json', '{"d":{"status": "connected" }}');
});
