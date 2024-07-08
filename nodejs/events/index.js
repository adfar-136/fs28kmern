var EventEmiiter =  require("events")
var eventEmiiter = new EventEmiiter()

var fun1 =(x)=>{
    console.log("event triggered "+ x)
}
var fun2=(y)=>{
    console.log("event 2 fun triigered" + y)
}

eventEmiiter.on("myEvent",fun1);
eventEmiiter.on("myEvent",fun2);
eventEmiiter.on("myEvent",fun1);
eventEmiiter.on("myEvent",fun2);

// eventEmiiter.removeListener("myEvent",fun1)
// eventEmiiter.removeAllListeners("myEvent")
eventEmiiter.prependListener("myEvent",fun2)
console.log(eventEmiiter.listenerCount("myEvent"))
console.log(eventEmiiter.listeners("myEvent"))

eventEmiiter.emit("myEvent","event occured")