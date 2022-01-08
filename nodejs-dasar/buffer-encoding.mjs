const buffer = Buffer.from("jauharuddin", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("amF1aGFydWRkaW4=", "base64");
console.info(bufferBase64.toString("utf8"));

const bufferHex = Buffer.from("6a6175686172756464696e", "hex");
console.info(bufferHex.toString("utf8"));