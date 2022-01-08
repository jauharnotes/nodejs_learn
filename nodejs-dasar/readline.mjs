import readline from "readline";
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("Siapa Anda? ", (name) => {
    console.info(`Halo ${name}`);
});