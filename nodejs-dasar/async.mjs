function samplePromise(){
    return Promise.resolve("johar");
}

const name = await samplePromise();
console.log(name); 