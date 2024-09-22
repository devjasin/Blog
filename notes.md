step1. npm init -y into terminal if you want to enter data than npm init enter
create app.js
now install express using npm install express
express:4.19.2(major.minor.patch)=> semantic version (semver)

first we need to invoked express in out app.js using
const express=required("express");
now we need to open express we initilize it on app// varibale name app is just a convention

const app=express();

now we need to host this in any port

app.listen(portnumber,function)i.e
app.listen(3000,()=>{
console.log("server is running on port 3000");
})

what is portnumber ?
A port number is a numerical identifier in computer networking used to specify a particular process or service on a networked device. Here are some key points:

Range: Port numbers range from 0 to 655351.
Types: They are divided into three categories:
Well-known ports (0-1023): Reserved for common services like HTTP (port 80) and HTTPS (port 443)1.
Registered ports (1024-49151): Used by software applications and services that are not as universally recognized1.
Dynamic or private ports (49152-65535): Typically used for temporary or private connections1.
Function: Ports help direct network traffic to the correct application or service. For example, when you visit a website, your browser uses port 80 (HTTP) or 443 (HTTPS) to communicate with the web server2.
(0-65535)
0-1023 reserved by system
3306 reserved for mysql

using app mean using express

.get()
it mean take data
app.get("/", (req, res) => {
res.send("this is home page");
});

in this code get mean if anybody has type / and request for data than res.send will response with regarding output. through url
