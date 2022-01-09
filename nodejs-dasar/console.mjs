import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("aplication.log");

const log = new Console({
    stdout: file,
    stderr: file,
});

log.info("Hello world!");
log.error("Hello Error!");

const person = {
    firsName: "jauhar",
    lastName: "Uddin",
};

log.table(person);