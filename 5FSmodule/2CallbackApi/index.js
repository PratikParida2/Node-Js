import * as fs from 'fs';
fs.mkdir("d:\\nodejs\\Demo",(error)=>
{
    if(error)
        console.log(error);
    console.log("File Created Successfully");
})