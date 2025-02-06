const fs=require('fs');
const express=require('express');
const status=require('express-status-monitor');
const app=express();
const port=3000;
app.use(status());
// for(let i=0;i<10000;i++)
// {
//     fs.writeFileSync("data.txt","Hello Node JS\n",{flag:'a'});
// }

app.get('/',(req,res)=>
{
    const data=fs.readFileSync("data.txt");
    res.send(data.toString());
});
app.listen(port,()=>{
    console.log("Server Is Strated");
});
