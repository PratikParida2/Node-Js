import http from 'http';
const server=http.createServer((req,res)=>
{
    console.log(req);
    res.write(`<h1>Node Js Server Started</h1>`);
});
server.listen(3000,()=>{
    console.log("Server Is Started");
})