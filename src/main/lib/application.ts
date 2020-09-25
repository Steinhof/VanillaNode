import http from "http";
import path from "path";
import dotenv from "dotenv";
import accessEnvHelper from "../utils/accesenv.util";

function Application(): void {
    dotenv.config({ path: path.resolve(__dirname, "../../resources/.env") });
    const PORT: string = accessEnvHelper("PORT");

    const server = http.createServer();

    server.listen(PORT, () => {
        console.log("Server running");
    });
}

export default Application;
