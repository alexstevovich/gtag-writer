import { write } from "../src/gtag-writer.mjs";

const trackingId = "G-XXXXXXXXXX";
console.log(write(trackingId));
console.log(write(trackingId,{minify:true}));