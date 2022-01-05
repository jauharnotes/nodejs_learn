function samplePromise(){
    return Promise.resolve("johar");
}

async function run(){
    const name = await samplePromise();
    console.log(name);
}

run();