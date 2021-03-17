
import Net from "net";

const Sockets = new Map<string, Net.Socket>();

export default (port: number) : Net.Server => {
    const server = Net.createServer();

    server.on("connection", (socket) => {
        let id: string;

        socket.on("data", (data) => {
            if (!data) return;
            const content = data.toString("utf-8");
            id = content.slice(1);
            switch(content[0]) {
            case "0":
                Sockets.set(id, socket);
                break;
            }
            console.log("Packet ID: ", content[0], "Content: ", id);
        });

        socket.on("close", () => {
            if (id) Sockets.delete(id);
        });

        socket.on("error", () => {
            if (id) Sockets.delete(id);
        });
    });

    server.listen(port, "127.0.0.1");
    console.log("Server started");
    return server;
};