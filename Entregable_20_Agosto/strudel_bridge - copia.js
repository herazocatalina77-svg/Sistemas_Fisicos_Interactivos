const OSC = require('osc-js');

const config = {
  udpClient: {
    host: '127.0.0.1',
    port: 9000
  }
};

const osc = new OSC({
  plugin: new OSC.BridgePlugin(config)
});

osc.on('*', (message) => {
  console.log('OSC RECIBIDO:', message.address, message.args);
});

osc.open();

console.log('Bridge corriendo: WebSocket 8080 → UDP 9000');