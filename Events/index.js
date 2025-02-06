import Event from 'events';
const evn=new Event();
//Methods
//1.on Listen Or Register For An Event , This On Function Call Anytime
// evn.on("response",(name,id)=>{
//     console.log("username: "+name+" id: "+id);
// });
// evn.emit("response","Pratik",1);
// evn.emit("response","Nikhil",2);
// evn.emit("response","Gudu",3);

//2.once Listen Or Register For An Event , This Once Function Call Only One Time

evn.once("response",(name,id)=>{
    console.log("username: "+name+" id: "+id);
});
evn.emit("response","Pratik",1);
evn.emit("response","Nikhil",2);
evn.emit("response","Gudu",3);

