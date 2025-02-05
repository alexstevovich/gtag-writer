const { write } = require("../src/gtag-writer.cjs");

const trackingId = "G-XXXXXXXXXX";
console.log(write(trackingId));
console.log(write(trackingId,{minify:true}));