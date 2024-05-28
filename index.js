//PORTS
//entry point for our server
//gateway through which external services can enter our server



//headers

//https

//json


//filesystem
const fileSystem = require("fs");
const operatingSystem = require("os");
// writing a file
// fileSystem.writeFile("noddy.txt","Hello Noddy !!!",function(err,result){
//     if(err){
//         console.log(err);
//     }
    
// });

//removing a file
// fileSystem.unlink("noddy.txt",function(err,result){
//     if(err){
//         console.log(err);
//     }
    
// });

// //making a directory
// fileSystem.mkdir("noddy", function(err,result){
//     if(err){
//         console.log(err);
//     }
    
// });


//removing a directory
// fileSystem.mkdir("noddy", function(err,result){
//     if(err){
//         console.log(err);
//     }
    
// });

//OPERATING SYSTEM INTERNAL MODULE
//operating system
// console.log(operatingSystem.platform());

// checkong the bits of operating system
// console.log(operatingSystem.arch());


//------------------Creating a server request ,response using http module ------------------------

// const http = require("http");
// http.createServer((request,response) => {
//     if(request.url==="/")
//         {
//             response.end("Welcome Noddy");
//         }
//     // console.log(request.headers);// displaying the headers of the request
    
//     else
//     {
//         response.end("Hello all ! This is not the root route");
//     }
    
// }).listen(4000);


//-------------------------- REST API --------------------------------

// RE -> REpresrntational
// S -> State
// T -> Transfer

//Representing data by sharing after processing 

const express = require("express");
// initialize express
const noddy = express();
//using json format of express
noddy.use(express.json());


//GET method in express
noddy.get("/", (request, responce) => {
    return responce.json({data: "Hello Noddy"});
});

noddy.get("/b", (request, responce) => {
    return responce.json({data: "Hello Noddy this is route b"});
});

noddy.get("/b/:id", (request, responce) => {
    const students=[
        {
            id: 1,
            name: "Student1"
        },
        {
            id: 2,
            name: "Student2"
        },
        {
            id: 3,
            name: "Student3"
        },
        {
            id: 4,
            name: "Student4"
        },
        {
            id: 5,
            name: "Student5"
        }
    ];

    const studentID= request.params.id;
    const getStudent= students.filter((student) => student.id === parseInt(studentID));
    return responce.json({data: getStudent});

    return responce.json({data: "Hello Noddy"});
});

noddy.listen( 4000 , () => {
    console.log("Server is running on port 4000");
});
