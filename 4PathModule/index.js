import path from 'path'
console.log(path.basename("d:\\4pathmodule\\index.js"));
console.log(path.dirname("d:\\4pathmodule\\index.js"));
console.log(path.extname("d:\\4pathmodule\\index.html"));

//It's Just Join The String 
console.log(path.join("c:","Pratik","Nodejs","index.js"));

//Get Up To Upper Level
console.log(path.join("c:","Pratik","Nodejs","index.js",".."));

//Get The All Data About Path In Object Like Manner
console.log(path.parse("d:\\4pathmodule\\index.js"));