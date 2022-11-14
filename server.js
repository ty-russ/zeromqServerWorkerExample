const zmq = require("zeromq");
const sock = new zmq.Push();

run();
async function run() {
  await sock.bind("tcp://127.0.0.1:7000");

  console.log("server is ready and listenening on 7000");
  //console.log("====Press any key to start sending the jobs===");
  send();
  //process.stdin.once("data", send);
}

//send jobs to subscribed workers

async function send() {
  console.log("About to send jobs!");
  for (let i = 0; i < 100; i++) {
    await sock.send(`Job Id ${i}`);
    //delay 500ms
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}
