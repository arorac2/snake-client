const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: "50541" // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // send a "Move: up" command to the server when the connection is established
  conn.on("connect", () => {
    console.log("Connected to game server!");
   // conn.write("Move: up");
  });

  // handle incoming data 
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();