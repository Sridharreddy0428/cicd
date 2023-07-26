const http = require('http')
const server = http.createServer((req, res)=>{
    console.log("New Connection")
    res.end("Hello Abhi Reddy WELCOME TO CI-CD")
})
const PORT = process.env.PORT || 8010
server.listen(PORT,()=>console.log('Listening'))
