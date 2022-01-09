import net from "net";

const server = net.createServer((clien) => {
    console.info("Clien connected");

    clien.addListener("data", (data) => {
        console.info(`Receive data ${data.toString()}`);
        clien.write(`Hello ${data.toString()}\r\n`);
    });
});

server.listen(3000, "localhost");
