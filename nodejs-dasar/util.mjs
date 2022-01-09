import util from 'util';

const firsName = "jauhar";
const lastName = "Uddin";

console.info(`Hello ${firsName} ${lastName}`);
console.info(util.format("Hello %s %s", firsName, lastName));

const person = {
    firsName: "Juned",
    lastName: "Khanedy"
};

console.info(`person: ${JSON.stringify(person)}`);
console.info(util.format("person: %j", person));