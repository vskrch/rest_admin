host = '192.168.2.201';	// hostname or IP address
//host = 'iot.eclipse.org';	// hostname or IP address
//host = 'broker.mqttdashboard.com';	// hostname or IP address

port = 9001;
//port = 8000;
//port = 8080;

var topic_array = new Array("navio1/message", 
                            "navio2/message",
                            "gateway/status", 
                            "wingtip1/message", 
                            "wingtip2/message", 
                            "forcebar/message", 
                            "engine/message", 
                            "winch1/message", 
                            "winch2/message",
							"winch3/message",
                            "keelshift1/message", 
                            "keelshift2/message",  
                            "camera/message",
                            "pilotip/heartbeat",
                            "pilotip/satellite/status",
                            "pilotip/tasks/satellite/status",
                            "pilotip/tasks/satellite/lapses",
                            "pilotip/pilot/message",
                            "linear_store/message");

topic = topic_array;
useTLS = false;
username = null;
password = null;
cleansession = true;
