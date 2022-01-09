import { URL } from "url";

const pzn = new URL("https://programmerzamannow.com/belajar?kelas=nodejs");

pzn.host = "www.jauharuddin.com";
pzn.searchParams.append("status", "premium");

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.hostname);
console.info(pzn.searchParams);