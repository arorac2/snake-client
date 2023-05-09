
const net = require("net");
const connect = require("./client.js");

// Establish TCP connection with server
const conn = net.createConnection({
  host: "165.227.47.243",  
  port: 50541  
});

// Interpret incoming data as text
conn.setEncoding("utf8");

// Handle incoming data from server
conn.on("data", (data) => {
  console.log("Server says:", data);
});

// Send data to server
conn.write("Hello server!");

// Handle user input from keyboard
const handleUserInput = function (key) {
  if (key === "w") {
    conn.write("Move: up");
  } else if (key === "a") {
    conn.write("Move: left");
  } else if (key === "s") {
    conn.write("Move: down");
  } else if (key === "d") {
    conn.write("Move: right");
  } else if (key === "\u0003") {
    process.exit();
  }
};

// Set up input from keyboard
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log("Connecting to server...");
setupInput();