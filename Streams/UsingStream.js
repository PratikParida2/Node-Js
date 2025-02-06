const express=require('express');
const status=require('express-status-monitor');
const fs=require('fs');
const app=express();
const port=3000;
app.use(status());
app.get('/',(req,res)=>
{
    const stream=new fs.createReadStream('data.txt');
    stream.on('data',(chunk)=>
    {
        res.write(chunk);
    });
    stream.on('end',()=>
    {
        res.end();
    });

});
app.listen(port,()=>
{
    console.log("Server Is Strated");
});