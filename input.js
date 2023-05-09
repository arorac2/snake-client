
// // Establish TCP connection with server
// const connect = net.createConnection({
//   host: "165.227.47.243",  
//   port: 50541  
// });

// // Interpret incoming data as text
// conn.setEncoding("utf8");

// // Handle incoming data from server
// connect.on("data", (data) => {
//   console.log("Server says:", data);
// });

// // Send data to server
// connect.write("Hello server!");

// Handle user input from keyboard
// Handle user input from keyboard
const handleUserInput = function (key) {
  if (key === "w") {
    connect.write("Move: up");
    console.log("Moved up");
  } else if (key === "a") {
    connect.write("Move: left");
    console.log("Moved left");
  } else if (key === "s") {
    connect.write("Move: down");
    console.log("Moved down");
  } else if (key === "d") {
    connect.write("Move: right");
    console.log("Moved right");
  } else if (key === "1") {
    connect.write("Say: Hi there!");
    console.log("Sent 'Hi there!'");
  } else if (key === "2") {
    connect.write("Say: whats up?");
    console.log("Sent 'whats up?'");
  } else if (key === "3") {
    connect.write("Say: Nice game!");
    console.log("Sent 'Nice game!'");
  } else if (key === "\u0003") {
    process.exit();
  }
};

// Set up input from keyboard
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
};

module.exports = { setupInput };