import http from "http";

class Server {
    private readonly PORT: number = +process.env.PORT;

    public start(): void {
        this.listen();
    }

    private listen(): void {
        const server = this.create();
        server.listen(8080, () => {
            console.log(`Server running`);
        });
    }

    private create() {
        return http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end("Hello World");
        });
    }
}

export default Server;
