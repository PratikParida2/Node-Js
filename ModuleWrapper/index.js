//Module Wrapper Function
(function(exports,require,module,__filename,__dirname){
    console.log("Iam In IIFE Function");
})();
// Whene You Write A Js Code like A Loop Or A Function Or If else etc is bounded in IIFE Function
console.log("Filename: "+__filename);
console.log("DirName: "+__dirname);