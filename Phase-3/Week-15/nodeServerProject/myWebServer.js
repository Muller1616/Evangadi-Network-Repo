import random from './randomNumber.js';
import http from 'http';
import fs from "fs"
import path from "path";

// Q6
const PORT = 1234;

// const server = http.createServer();
// server.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
// })

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type","text/plain");
//     res.end("Requeast received and processed")
// });

// server.listen(PORT,()=>{
//     console.log(`server running and listening on http://localhost:${PORT}`);
// });

// or
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Server listening on port 1234');
// });


// Q7
// const server = http.createServer((req,res)=>{

//     const number = random();
//     res.statusCode = 200;
//     res.setHeader("Content-Type","text/plain");
//     res.end(`random number generated is, ${number}`)
// });

// server.listen(PORT, () =>{
//     console.log(`server running and listeningg on http://localhost:${PORT}`)
// })


// Q8
const server = http.createServer((req,res)=>{
    console.log("Request URL is: ", req.url);

let fp = ""

if(req.url === "/" || req.url === "/about"){
    fp = "./static/apple-html-css-replica/about.html"
}
else{
    fp = "./static" + req.url;
}


// read the file and seend it to the browsor
fs.readFile(fp, (err,data)=>{
    if(err){
        res.writeHead(404,{"Content-Type":"text/html"})
        res.end("<h1>404 Not Found</h1>")
    }
    else{
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(data)
    }
})

})

server.listen(PORT,()=>{
    console.log("Server running at http://localhost:1234")
})