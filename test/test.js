import { writeGoogleTagBlock } from "../src/gtag-writer.mjs";

const trackingId = "G-XXXXXXXXXX";
console.log(writeGoogleTagBlock(trackingId));
