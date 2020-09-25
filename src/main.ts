import path from "path";
import dotenv from "dotenv";
import Server from "./connect/Server";

dotenv.config({
    path: path.resolve(__dirname, "./config/.env"),
});

const server = new Server();
server.start();
