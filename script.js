const questions = [
    // WEEK 1
    { q: "What is the full form of IoT?", a: "d", options: { a: "Internet of Tasks", b: "Internet of Articles", c: "Internet of Taps", d: "None of these" }, sol: "Internet of Things" },
    { q: "The 'Source Address' field in the IPv6 header is of ___ bits.", a: "c", options: { a: "32", b: "64", c: "128", d: "None of these" } },
    { q: "Which of the following is/are not an enabler of IoT?", a: "d", options: { a: "RFID", b: "Sensors and Actuators", c: "Cloud Computing", d: "None of these" } },
    { q: "The gateway is tasked with assigning a unique address to field devices.", a: "a", options: { a: "True", b: "False" } },
    { q: "Increasing devices in IoT results in an address crunch.", a: "a", options: { a: "True", b: "False" } },
    { q: "Node/network connected to multiple networks for reliability is called:", a: "c", options: { a: "Transparent roaming", b: "Multi-clouding", c: "None of these" }, sol: "Multi-homing" },
    { q: "Which is NOT a function of an IoT Gateway?", a: "d", options: { a: "Connects LAN to WAN", b: "Implement several LAN/WAN", c: "Both a and b", d: "Neither a nor b" } },
    { q: "An actuator requires a control signal and energy source.", a: "d", options: { a: "Stmt I incorrect", b: "Stmt II incorrect", c: "Both incorrect", d: "Both correct" } },
    { q: "Which is NOT a function of an IoT LAN?", a: "c", options: { a: "Long range communication", b: "World wide connections", c: "Both a and b", d: "Neither a nor b" } },
    { q: "Transducer is a collective term for Sensors and Actuators.", a: "a", options: { a: "True", b: "False" } },
    { q: "Analog Sensors produce a discontinuous output signal.", a: "b", options: { a: "True", b: "False" }, sol: "They produce continuous signals." },
    { q: "If output differs from correct value by a constant, it is:", a: "c", options: { a: "Offset error", b: "Bias", c: "Both a and b", d: "None" } },
    { q: "Pneumatic actuators produce large forces from large pressure changes.", a: "a", options: { a: "False", b: "True" } },
    { q: "A sensor node is made up of:", a: "d", options: { a: "Sensors", b: "Processing unit", c: "Power unit", d: "All of these" } },
    { q: "Full form of SMP in IoT actuators:", a: "a", options: { a: "Shape Memory Polymers", b: "Shape Master Polymers", c: "Switch Mode Power", d: "Sensor Making Polymer" } },

    // WEEK 2
    { q: "Full form of MQTT:", a: "b", options: { a: "Message Query Telemetry Transport", b: "Message Queue Telemetry Transport", c: "Message Queue Telemedicine Transport", d: "None" } },
    { q: "XMPP uses which architecture?", a: "b", options: { a: "Publish-subscribe", b: "Client-server", c: "Both", d: "Neither" } },
    { q: "AMQP guarantee: message delivered certainly but may be multiple times.", a: "a", options: { a: "At-least-once", b: "At-most-once", c: "Exactly-once", d: "Both a and b" } },
    { q: "In MQTT, the Publishers are:", a: "a", options: { a: "Lightweight sensors", b: "Actuators", c: "Processing units", d: "None" } },
    { q: "Which is NOT a method in MQTT?", a: "d", options: { a: "Publish", b: "Connect", c: "Disconnect", d: "None" } },
    { q: "CoAP has ___ modes for messaging.", a: "b", options: { a: "2", b: "4", c: "8", d: "None" } },
    { q: "CoAP architecture is divided into three sub-layers.", a: "b", options: { a: "True", b: "False" }, sol: "It is divided into two sub-layers." },
    { q: "Full form of XMPP:", a: "b", options: { a: "Extensible Markup Page Processing", b: "Extensible Messaging and Presence Protocol", c: "Both", d: "Neither" } },
    { q: "XMPP is not an open standard protocol.", a: "a", options: { a: "False", b: "True" } },
    { q: "Which is NOT a frame type of AMQP?", a: "d", options: { a: "Origin", b: "Destination", c: "Advance", d: "All of these" } },
    { q: "Basic unit of data in AMQP:", a: "d", options: { a: "Chunk", b: "Byte", c: "Packet", d: "None" }, sol: "It is called a 'frame'." },
    { q: "AMQP exchange types:", a: "d", options: { a: "Direct", b: "Fan-out", c: "Topic", d: "All of these" } },
    { q: "Which is NOT an application of 6LoWPAN?", a: "d", options: { a: "IoT", b: "IIoT", c: "Both", d: "Neither" } },
    { q: "The OSI model has ___ layers.", a: "d", options: { a: "6", b: "9", c: "4", d: "None" }, sol: "7 layers." },
    { q: "Destination Address in IPv4 represents:", a: "a", options: { a: "Destination node address", b: "Intermediate hop", c: "Both", d: "None" } },

    // WEEK 3
    { q: "There is no network layer in Wired HART.", a: "a", options: { a: "True", b: "False" } },
    { q: "Zwave frequencies (US, Europe) in MHz:", a: "b", options: { a: "1008, 989", b: "908.42, 868.42", c: "767.56, 855.28", d: "None" } },
    { q: "Dumb behavior of sensor nodes is ___ in nature.", a: "a", options: { a: "Temporal", b: "Spatial", c: "Both", d: "None" } },
    { q: "Removing interference channels is known as:", a: "d", options: { a: "Channel Trimming", b: "Channel Flushing", c: "Both", d: "None" }, sol: "Channel Blacklisting" },
    { q: "Full form of NFC:", a: "b", options: { a: "Near Field Contact", b: "Near Field Communication", c: "Both", d: "Neither" } },
    { q: "NFC works on magnetic induction.", a: "a", options: { a: "True", b: "False" } },
    { q: "NFC tags in supermarkets are active NFC.", a: "b", options: { a: "True", b: "False" }, sol: "They are passive." },
    { q: "Bluetooth is based on:", a: "d", options: { a: "Nanonets", b: "Binarynets", c: "Both", d: "None" }, sol: "Piconets" },
    { q: "In NFC, what emits current to create a magnetic field?", a: "a", options: { a: "Reader", b: "Writer", c: "Destroyer", d: "None" } },
    { q: "Bluetooth technology is Ad-hoc based.", a: "b", options: { a: "False", b: "True" } },
    { q: "Zwave uses GFSK and Hongkong encoding.", a: "b", options: { a: "True", b: "False" }, sol: "Manchester encoding." },
    { q: "Bypassing radio dead-spots in Zwave is called:", a: "b", options: { a: "Ping", b: "Healing", c: "Frame", d: "None" } },
    { q: "Sensor nodes have unlimited battery life.", a: "b", options: { a: "True", b: "False" } },
    { q: "Link Manager Protocol in Bluetooth manages authentication.", a: "a", options: { a: "True", b: "False" } },
    { q: "Zigbee commonly uses ___ data rate.", a: "a", options: { a: "250 kbps", b: "250 Mbps", c: "260 kbps", d: "260 Mbps" } },

    // WEEK 4
    { q: "A camera can be used instead of PIR in agriculture.", a: "a", options: { a: "True", b: "False" } },
    { q: "Ultrasonic sensor senses:", a: "a", options: { a: "Distance", b: "Coordinates", c: "Both", d: "None" } },
    { q: "WMSNs can be used for:", a: "d", options: { a: "Security surveillance", b: "Wild-habitat monitoring", c: "Environmental monitoring", d: "All of these" } },
    { q: "Coverage objective in WSN: min sensors, max lifetime.", a: "a", options: { a: "True", b: "False" } },
    { q: "Full form of AUV:", a: "d", options: { a: "Aerial and Underwater Vehicle", b: "Ambient Vehicle", c: "Astral Vehicle", d: "None" }, sol: "Autonomous Underwater Vehicle" },
    { q: "Localized coverage algorithms use a subset of nodes.", a: "a", options: { a: "True", b: "False" } },
    { q: "Advantage of Stationary WSN:", a: "c", options: { a: "Easy deployment", b: "Easy maintenance", c: "Both", d: "None" } },
    { q: "In Human-centric Sensing, humans act as Sensor Operators.", a: "a", options: { a: "True", b: "False" } },
    { q: "Which is NOT a property of MANET?", a: "d", options: { a: "Self-CHOP", b: "Self-HOP", c: "Both", d: "None" } },
    { q: "UAV networks solve frequent change configurations.", a: "b", options: { a: "False", b: "True" } },
    { q: "Which is NOT a feature of mesh topology in UAV?", a: "c", options: { a: "Flexible", b: "Reliable", c: "None of these", d: "Both" } },
    { q: "Which is NOT a property of FANET?", a: "d", options: { a: "Inter-plane comm", b: "Intra-plane comm", c: "Both", d: "None" } },
    { q: "M2M networks have a few number of sensor nodes.", a: "a", options: { a: "False", b: "True" }, sol: "They have a large number." },
    { q: "Full form of M2SP:", a: "d", options: { a: "Stateless Platform", b: "Session Packet", c: "Secure Packaging", d: "None" }, sol: "M2M Service Platform" },
    { q: "Platform providing integrated services based on data-sets:", a: "a", options: { a: "M2M Application Platform", b: "M2M Service Platform", c: "M2M Hardware Platform", d: "None" } },

    // WEEK 5
    { q: "Interoperability refers to:", a: "b", options: { a: "Operating without power", b: "Systems working together without restrictions", c: "Increasing internet speed", d: "None" } },
    { q: "In Cosine (A, B, C, D), 'C' represents:", a: "c", options: { a: "Language", b: "Identifier", c: "Context of A", d: "Definition" } },
    { q: "Syntactic Interoperability challenge:", a: "b", options: { a: "Different shapes", b: "Different message formats/data structures", c: "Different countries", d: "Different owners" } },
    { q: "Why is Arduino popular in IoT?", a: "b", options: { a: "Expensive", b: "Low resource and cheap", c: "High power cooling", d: "Digital only" } },
    { q: "Clock speed of Arduino Uno:", a: "c", options: { a: "8 MHz", b: "32 MHz", c: "16 MHz", d: "50 MHz" } },
    { q: "Function used to iteratively loop in Arduino:", a: "c", options: { a: "setup()", b: "main()", c: "loop()", d: "start()" } },
    { q: "Default starting index for Arduino array:", a: "c", options: { a: "1", b: "-1", c: "0", d: "10" } },
    { q: "delay(5000) introduces a delay of:", a: "b", options: { a: "Reset", b: "5 seconds", c: "LED off", d: "Skip loop" } },
    { q: "Header file for sin() or cos():", a: "b", options: { a: "arduino.h", b: "math.h", c: "sensor.h", d: "stdio.h" } },
    { q: "DHT22 sensor measures:", a: "c", options: { a: "Pressure", b: "Light", c: "Humidity and Temp", d: "Motion" } },
    { q: "Recommended voltage for DHT VCC pin:", a: "b", options: { a: "1-2V", b: "3.3V-5V", c: "12-24V", d: "0-1V" } },
    { q: "Which Arduino pin receives DHT data?", a: "b", options: { a: "GND", b: "Signal/data pin", c: "5V", d: "AREF" } },
    { q: "Primary function of an actuator:", a: "b", options: { a: "Motion to energy", b: "Energy/signals into motion", c: "Store data", d: "Connect internet" } },
    { q: "Arduino function to specify Servo pin:", a: "b", options: { a: "connect()", b: "attach()", c: "pinMode()", d: "write()" } },
    { q: "Function to command Servo to specific angle:", a: "c", options: { a: "move()", b: "rotate()", c: "write()", d: "turn()" } },

    // WEEK 6
    { q: "Output of x='This is Python'; print(x[2:4]):", a: "a", options: { a: "is", b: "hi", c: "is (space)", d: "Th" } },
    { q: "Purpose of try...except in Python:", a: "c", options: { a: "Define function", b: "Create loop", c: "Handle exceptions", d: "Import libraries" } },
    { q: "Specific Python requirement for code blocks:", a: "c", options: { a: "Curly braces", b: "Begin/End", c: "Rigid indentation", d: "Semicolons" } },
    { q: "In UDP client-server, why use same port?", a: "c", options: { a: "Save power", b: "Encryption", c: "Send to exact endpoint", d: "Not critical" } },
    { q: "open() in 'w' mode for non-existent file:", a: "b", options: { a: "Error", b: "Creates file", c: "Read-only", d: "Asks permission" } },
    { q: "Mode for both reading and writing in Python:", a: "c", options: { a: "rw", b: "w", c: "r+", d: "a" } },
    { q: "Command to expand RPi file system:", a: "c", options: { a: "apt-get update", b: "reboot", c: "sudo raspi-config", d: "ifconfig" } },
    { q: "Advantage of Pi 3 over Pi Zero:", a: "a", options: { a: "Built-in Wi-Fi/Bluetooth", b: "Smaller", c: "Expensive", d: "Fewer USB" } },
    { q: "Windows software to write RPi OS image:", a: "c", options: { a: "Rufus", b: "Etcher", c: "Win32 Disk Imager", d: "UNetbootin" } },
    { q: "RPi Camera ribbon blue tag faces:", a: "c", options: { a: "HDMI", b: "USB", c: "Ethernet", d: "GPIO" } },
    { q: "Terminal command to capture image on RPi:", a: "b", options: { a: "install picamera", b: "raspistill -o name.jpg", c: "python script.py", d: "capture()" } },
    { q: "Purpose of GPIO.setmode(GPIO.BOARD):", a: "c", options: { a: "Output mode", b: "Time library", c: "Physical board numbering", d: "Clear settings" } },
    { q: "Command to install Adafruit DHT library:", a: "b", options: { a: "apt-get", b: "sudo python setup.py install", c: "install dht", d: "pip install" } },
    { q: "Adafruit DHT library default pin config:", a: "c", options: { a: "BOARD", b: "WiringPi", c: "BCM", d: "Physical" } },
    { q: "DHT sensor Ground pin number:", a: "d", options: { a: "1", b: "2", c: "3", d: "4" } },

    // WEEK 7
    { q: "Purpose of socket.bind() on server:", a: "b", options: { a: "Connect", b: "Associate with interface/port", c: "Listen", d: "Close" } },
    { q: "Library to integrate DHT with RPi:", a: "b", options: { a: "NumPy", b: "Adafruit_DHT", c: "Matplotlib", d: "Pandas" } },
    { q: "Demonstrated socket type for data transmission:", a: "b", options: { a: "TCP", b: "UDP", c: "Raw", d: "None" } },
    { q: "Function to split string based on delimiter:", a: "c", options: { a: "cut()", b: "divide()", c: "split()", d: "break()" } },
    { q: "Python library for data plotting:", a: "b", options: { a: "PyGame", b: "Matplotlib", c: "TensorFlow", d: "Scikit" } },
    { q: "Function to enable interactive plot mode:", a: "c", options: { a: "grid()", b: "show()", c: "ion()", d: "subplot()" } },
    { q: "SDN interface between Control and Data Plane:", a: "b", options: { a: "Northbound", b: "Southbound", c: "Eastbound", d: "Westbound" } },
    { q: "SDN flow tables are stored in:", a: "c", options: { a: "RAM", b: "ROM", c: "TCAM", d: "Flash" } },
    { q: "Which is NOT an attribute of SDN?", a: "d", options: { a: "Controller", b: "Apps", c: "Hardware switches", d: "None" } },
    { q: "API for comm between multiple controllers:", a: "c", options: { a: "Northbound", b: "Southbound", c: "East-Westbound", d: "None" } },
    { q: "Typical delay for new rule placement in SDN:", a: "b", options: { a: "1-2ms", b: "3-5ms", c: "10-15ms", d: "100ms" } },
    { q: "Requests per sec for single-threaded SDN controller:", a: "b", options: { a: "100", b: "200", c: "500", d: "1000" } },
    { q: "What is SDN-WISE?", a: "b", options: { a: "Hardware component", b: "Software Defined WSN platform", c: "Database", d: "Cloud storage" } },
    { q: "Soft-WSN PDR vs traditional WSN:", a: "b", options: { a: "Lower", b: "Significantly improved", c: "Same", d: "Not supported" } },
    { q: "SDN-IoT: where are flow classification/security handled?", a: "b", options: { a: "Physical nodes", b: "Data Center Networks", c: "Gateways", d: "Mobile" } },

    // WEEK 8
    { q: "SDMN architecture using agents at access points:", a: "b", options: { a: "uFlow", b: "Odin", c: "MobileFlow", d: "OpenFlow" } },
    { q: "SWAN group solution for mobile IoT flow rules:", a: "c", options: { a: "Odin", b: "uFlow", c: "MobileFlow", d: "Soft-WSN" } },
    { q: "Which DCN flow requires exact match rules?", a: "b", options: { a: "Mice flow", b: "Elephant flow", c: "Cheetah", d: "Tortoise" } },
    { q: "Cloud computing is computing as a:", a: "a", options: { a: "Utility", b: "Product", c: "Protocol", d: "None" } },
    { q: "Which is NOT an essential cloud characteristic?", a: "d", options: { a: "Elasticity", b: "Measured Service", c: "Pooling", d: "Fixed Allocation" } },
    { q: "Model restricted to a single organization:", a: "b", options: { a: "Public", b: "Private", c: "Hybrid", d: "Community" } },
    { q: "PaaS: User manages Apps/Data; Provider manages:", a: "b", options: { a: "Hardware only", b: "Runtime, Middleware, OS", c: "Nothing", d: "Everything" } },
    { q: "Model to rent virtualized servers/networking:", a: "c", options: { a: "SaaS", b: "PaaS", c: "IaaS", d: "XaaS" } },
    { q: "Limitation of SaaS model:", a: "c", options: { a: "Cross-platform", b: "Lack of multi-tenancy", c: "Security/Privacy", d: "Hardware costs" } },
    { q: "SLA stands for:", a: "b", options: { a: "Service Level Application", b: "Service Level Agreement", c: "Secure Access", d: "Standard Agreement" } },
    { q: "Bluepill attack targets:", a: "c", options: { a: "Browser", b: "Database", c: "Hypervisor", d: "Switch" } },
    { q: "Independent expectancy between entities:", a: "a", options: { a: "Trust", b: "Reputation", c: "Authorization", d: "Authentication" } },
    { q: "GreenCloud feature:", a: "a", options: { a: "Monitor energy consumption", b: "Closed-source", c: "By Microsoft", d: "No GUI" } },
    { q: "Azure PaaS vs IaaS:", a: "b", options: { a: "Price", b: "PaaS: App build environment; IaaS: OS control", c: "Mobile vs Web", d: "None" } },
    { q: "Java-based cloud simulator from Univ. Melbourne:", a: "b", options: { a: "GreenCloud", b: "CloudSim", c: "iCanCloud", d: "DC Sim" } },

    // WEEK 9
    { q: "Used to install OpenStack:", a: "a", options: { a: "devstack", b: "stack", c: "Swift", d: "All" } },
    { q: "OpenStack is open-source.", a: "a", options: { a: "True", b: "False" } },
    { q: "OpenStack instance connection to public network needs:", a: "d", options: { a: "Database", b: "File", c: "Memory", d: "Router" } },
    { q: "Limitations of WSNs:", a: "c", options: { a: "Procurement", b: "Deployment", c: "All I, II, III", d: "None" } },
    { q: "Actors in sensor-cloud:", a: "d", options: { a: "End-users", b: "Sensor-owner", c: "SCSP", d: "All" } },
    { q: "Managerial role in sensor-cloud:", a: "b", options: { a: "End-user", b: "SCSP", c: "Neither", d: "Both" } },
    { q: "Function of Internal Cache in sensor-cloud:", a: "d", options: { a: "Handle user requests", b: "Decide re-caching", c: "Neither", d: "Both a and b" } },
    { q: "Unnecessary sensing causes energy consumption.", a: "a", options: { a: "True", b: "False" } },
    { q: "Dynamic caching improves sensor-cloud flexibility.", a: "a", options: { a: "True", b: "False" } },
    { q: "Who coined Fog Computing?", a: "b", options: { a: "IBM", b: "CISCO", c: "Both", d: "Neither" } },
    { q: "Fog computing is between:", a: "b", options: { a: "Dew and devices", b: "Cloud and devices", c: "Cloud and server", d: "None" } },
    { q: "Data types w.r.t sensitivity:", a: "d", options: { a: "Time-sensitive", b: "Less sensitive", c: "Not sensitive", d: "All" } },
    { q: "Hardware virtualization enables shared hardware.", a: "a", options: { a: "True", b: "False" } },
    { q: "Advantages of fog computing:", a: "c", options: { a: "Deployability", b: "Mobility", c: "Both", d: "Neither" } },
    { q: "Fog nodes connect to:", a: "d", options: { a: "IoT devices", b: "Cloud", c: "Neither", d: "Both" } },

    // WEEK 10
    { q: "Smart city is an ___ system.", a: "d", options: { a: "local", b: "rural", c: "home", d: "urban" } },
    { q: "Focus in smart parking:", a: "d", options: { a: "Auto-routing", b: "Auto-charging", c: "Slot detection", d: "All" } },
    { q: "True for smart health:", a: "c", options: { a: "Stmt I", b: "Stmt II", c: "All I, II, III", d: "None" } },
    { q: "Combining info from multiple sensor sources:", a: "d", options: { a: "Collection", b: "Deployment", c: "Dissemination", d: "Data fusion" } },
    { q: "Ensemble of decisions happens at:", a: "b", options: { a: "Feature level", b: "Decision level", c: "Pixel level", d: "All" } },
    { q: "Smart parking reduces traffic ___.", a: "d", options: { a: "mobility", b: "area", c: "analysis", d: "congestion" } },
    { q: "DLNA expands to:", a: "b", options: { a: "Lifestyle", b: "Living Network Alliance", c: "Algorithm", d: "None" } },
    { q: "Smart home cannot include wireless devices.", a: "b", options: { a: "True", b: "False" } },
    { q: "Layers of Zigbee:", a: "d", options: { a: "Physical", b: "MAC", c: "Network", d: "All" } },
    { q: "Property of V2X:", a: "b", options: { a: "Single source", b: "Distributed architecture", c: "Both", d: "Neither" } },
    { q: "CCN is derived from ICN.", a: "a", options: { a: "True", b: "False" } },
    { q: "In V2H, the human is:", a: "c", options: { a: "In another vehicle", b: "In same vehicle", c: "On roadside", d: "All" } },
    { q: "ICV is based on:", a: "a", options: { a: "DSRC", b: "Directed Short Range", c: "Small Range", d: "All" } },
    { q: "Domains of VANET:", a: "c", options: { a: "In-vehicle", b: "Ad-hoc", c: "Both", d: "Neither" } },
    { q: "Vehicles cannot be mobile in Ad-hoc domain.", a: "b", options: { a: "True", b: "False" } },

    // WEEK 11
    { q: "Another name for Smart Grids:", a: "a", options: { a: "Energy internet", b: "Electricity with hand", c: "Electrolyte", d: "All" } },
    { q: "Smart Grid energy flow:", a: "a", options: { a: "Bidirectional", b: "Unidirectional", c: "Both", d: "Neither" } },
    { q: "Home draws power from distributed resources in:", a: "b", options: { a: "Peaking", b: "Islanding", c: "Neither", d: "Both" } },
    { q: "Samples voltage/current with fixed rate:", a: "c", options: { a: "PEVS", b: "DAUs", c: "PMUs", d: "None" } },
    { q: "Compromising availability of grid component:", a: "d", options: { a: "Gateway", b: "Data injection", c: "AMH", d: "DoS" } },
    { q: "Types of Dynamic System Attacks:", a: "d", options: { a: "Replay", b: "D-DIA", c: "Covert", d: "All" } },
    { q: "IIoT follows 'rip & replace'.", a: "b", options: { a: "True", b: "False" }, sol: "It follows 'wrap & re-use'." },
    { q: "Mechanized production is part of 4th Revolution.", a: "b", options: { a: "True", b: "False" }, sol: "1st Revolution." },
    { q: "Match: 1-Mechanized, 2-Mass, 3-Automation, 4-IIoT.", a: "a", options: { a: "1-2-3-4", b: "2-1-4-3", c: "3-2-1-4", d: "4-3-2-1" } },
    { q: "Used to improve interoperability:", a: "a", options: { a: "Standardization", b: "Optimization", c: "Monitoring", d: "None" } },
    { q: "Primary challenge in IIoT:", a: "d", options: { a: "Health", b: "Optimization", c: "Compliance", d: "Integrating existing infrastructure" } },
    { q: "Lack of vision is not a hindrance to IIoT.", a: "b", options: { a: "True", b: "False" } },
    { q: "Big data characterized by 7 Vs.", a: "a", options: { a: "True", b: "False" } },
    { q: "Correct flow of data processing:", a: "c", options: { a: "Acquisition-Generation-Storage", b: "Generation-Storage-Acquisition", c: "Generation-Acquisition-Storage-Analysis", d: "None" } },
    { q: "Hadoop is for:", a: "c", options: { a: "Distributed processing", b: "Large clusters", c: "All", d: "Neither" } },

    // WEEK 12
    { q: "Two broad types of data analysis:", a: "a", options: { a: "Qualitative/Quantitative", b: "Repetitive/Quant", c: "Repetitive/Qual", d: "All" } },
    { q: "Qualitative principle:", a: "d", options: { a: "Notice", b: "Think", c: "Collect", d: "All" } },
    { q: "ANOVA needs ___ response and ___ factor.", a: "d", options: { a: "Discrete/Cat", b: "Cont/Quant", c: "Discrete/Quant", d: "Continuous/Categorical" } },
    { q: "IoT in Agriculture application:", a: "d", options: { a: "Irrigation", b: "Weeding", c: "Water level", d: "All" } },
    { q: "Most directly relevant sensors in agriculture:", a: "b", options: { a: "Soil/Proximity", b: "Soil moisture/Water level", c: "ECG/Water", d: "All" } },
    { q: "AgriSens gateway communicates via:", a: "d", options: { a: "WiFi", b: "Bluetooth", c: "Phone", d: "GPRS" } },
    { q: "IoT Healthcare layer order:", a: "b", options: { a: "Sensing-Cloud-Agg-Proc", b: "Sensing-Agg-Proc-Cloud", c: "Agg-Sensing-Proc-Cloud", d: "Sensing-Proc-Agg-Cloud" } },
    { q: "AmbuSens protocol:", a: "c", options: { a: "802.15.4", b: "6LoWPAN", c: "IEEE 802.15.1 (BT)", d: "802.15.2" } },
    { q: "Remote healthcare brings healthcare to patients.", a: "a", options: { a: "True", b: "False" } },
    { q: "Handheld pair for activity monitoring:", a: "c", options: { a: "EEG/GPS", b: "Acc/EEG", c: "Accelerometer/GPS", d: "All" } },
    { q: "Property of in-place data analysis:", a: "d", options: { a: "Power intensive", b: "On-device", c: "No network needed", d: "All" } },
    { q: "Deep learning cannot be on videos.", a: "b", options: { a: "True", b: "False" } },
    { q: "Inbuilt sensors in high-end smartphones:", a: "c", options: { a: "ECG/EEG", b: "Acc/Prox/EEG", c: "Acc/Compass/Gyro", d: "Pressure/NPK" } },
    { q: "AI processing of handheld data for:", a: "a", options: { a: "Fall detection", b: "Heart rate", c: "Vehicle", d: "All" } },
    { q: "Continuous monitoring helps identify repetitive patterns.", a: "a", options: { a: "True", b: "False" } }
];

// (Keep the 'questions' array from the previous response here)

// Note: Use the 'questions' array from the previous turn.

const quizContainer = document.getElementById('quiz-container');
const paletteContainer = document.getElementById('question-palette');

function init() {
    questions.forEach((item, index) => {
        // Question Injection
        const qDiv = document.createElement('div');
        qDiv.className = 'question-block';
        qDiv.id = `q-block-${index}`;
        
        let optionsHtml = '';
        for (const [key, value] of Object.entries(item.options)) {
            optionsHtml += `
                <label class="option-row">
                    <input type="radio" name="q${index}" value="${key}" onchange="markAnswered(${index})"> 
                    <span class="opt-text">${key.toUpperCase()}. ${value}</span>
                </label>
            `;
        }
        
        qDiv.innerHTML = `<h3>${index + 1}. ${item.q}</h3><div class="options">${optionsHtml}</div>`;
        quizContainer.appendChild(qDiv);

        // Palette Button Injection
        const pBtn = document.createElement('button');
        pBtn.className = 'palette-btn';
        pBtn.id = `p-btn-${index}`;
        pBtn.innerText = index + 1;
        pBtn.onclick = () => document.getElementById(`q-block-${index}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
        paletteContainer.appendChild(pBtn);
    });
}

function markAnswered(index) {
    document.getElementById(`p-btn-${index}`).classList.add('answered');
}

document.getElementById('submit-btn').onclick = submitTest;

function submitTest() {
    if(!confirm("Submit test? You cannot change answers after this.")) return;
    
    clearInterval(timerId);
    let score = 0;
    document.getElementById('result-legend').classList.remove('hidden');
    const reviewSection = document.getElementById('review-section');
    reviewSection.innerHTML = '<h3 style="margin-top:40px">Detailed Review</h3>';

    questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const pBtn = document.getElementById(`p-btn-${index}`);
        const isCorrect = selected && selected.value === item.a;

        if (isCorrect) {
            score++;
            pBtn.className = 'palette-btn correct'; // Palette stays and turns green
        } else {
            pBtn.className = 'palette-btn incorrect'; // Palette stays and turns red
        }

        // Build Review
        const rev = document.createElement('div');
        rev.className = 'question-block';
        rev.style.borderLeft = `8px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`;
        rev.innerHTML = `
            <p><strong>Question ${index + 1}</strong></p>
            <p>${item.q}</p>
            <p style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}">
                Your Answer: ${selected ? selected.value.toUpperCase() : 'None'}
            </p>
            <p>Correct Answer: <strong>${item.a.toUpperCase()}</strong></p>
            ${item.sol ? `<p class="sol-text"><em>Explain: ${item.sol}</em></p>` : ''}
        `;
        reviewSection.appendChild(rev);
    });

    // Final UI Swaps
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('score-text').innerText = `You achieved ${score} / ${questions.length} (${Math.round(score/questions.length*100)}%)`;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Timer Logic
let timeLeft = 3600;
const timerId = setInterval(() => {
    timeLeft--;
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    document.getElementById('timer').innerText = `${min}:${sec < 10 ? '0' : ''}${sec}`;
    if (timeLeft <= 0) submitTest();
}, 1000);

init();