import timer from 'timers/promises';

// console.info(new Date());
// const name = await timer.setTimeout(5000, "johar");
// console.info(new Date());
// console.info(name);

for await(const startTime of timer.setInterval(2000, "ignore")) {
    console.info(`Start time at ${new Date()}`);
}