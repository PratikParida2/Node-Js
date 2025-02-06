import fs from 'fs';
console.log("Strated");
fs.readFile("d:\\nodejs\\text.txt",(err,res)=>//Program Is Not Be Blocked Due To Use Callback
{
    if(!err)
        console.log(res.toString());
    else
    console.log(err);
});
console.log("Ended");
