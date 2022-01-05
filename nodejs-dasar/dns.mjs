import dns from 'dns/promises';

const address = await dns.lookup("www.pandawa24jam.com");

console.info(address);
console.info(address.address);
console.info(address.family);