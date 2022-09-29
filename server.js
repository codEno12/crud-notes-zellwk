console.log('May Node be with you')

const express = require('express');
const app = express()


app.listen(3000,function(){
    console.log('listening on 3000')
})

/* 


app.get('/', function(req, res){
    res.send('Hello World')
}) 


// arrow function syntaxt 
    * it only gets the initial "get" request if the endpoint and pathing is the same 

app.get('/', (req,res) => {
    res.send('Hello Me')
})

*/


// using get method to 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory(folder) you're in. 
})

/* what is a __dirname? 
// google definition
__dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file

// my own 
a variable that returns the directory name of the current module
*/


app.post('/quotes', (req, res)=> {
    console.log('hello ')
})



