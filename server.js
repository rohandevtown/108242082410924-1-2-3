const http = require("http"); // http import statement

const port = 8081; // port num

const toDoList = ["rohan", "rohit", "neol", "madhav", "trupti"]

http.createServer((req, res)=> {

    const {method, url} = req;
    // console.log(method, url)

    if(url === "/todo"){
            if(method === "GET"){
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write(toDoList.toString())
        }
    }

    // res.writeHead(200, {"Content-Type": "text/html"})
    // res.write("<h4>Hello world this is my server</h4>")
    res.end()
})
.listen(port, ()=>{
    console.log(`NodeJs server is up and running on port ${port}`)
})

// http://localhost:8081/


