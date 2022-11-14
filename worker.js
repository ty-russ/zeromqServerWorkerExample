const zmq = require("zeromq");
const sock = new zmq.Pull();


run();

async function run () {
    await sock.connect("tcp://127.0.0.1:7000");
    console.log("Connected to server")

    //asyncronous iterator

    for await (const msg of sock) {
       console.log(`recieved job ${msg.toString()}`)
    }
}

