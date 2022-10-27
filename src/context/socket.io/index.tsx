import {io} from "socket.io-client";

const socketClient = io("http://localhost:5000", {
  autoConnect: false,
  transports: ["websocket"],
});

export default socketClient;
