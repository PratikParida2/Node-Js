//Program Is Blocked Due To Not Use Callback
import fs from 'fs';
console.log("strated");
const data=fs.readFileSync("d:\\nodejs\\text.txt");//File Input Output
console.log(data.toString());
console.log("Ended");