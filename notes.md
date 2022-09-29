What is nodemon? 

Something equivalent to the live server extention 
Let us see the updated version of the server without having to restart it every time

Why should we do "npm install nodemon --save-dev"
--save-dev puts in into developer dependencies, which means that it will only be available during the development stage and not when its live *check again 

What is body-parse ? 
Express does not handle reading data from the form so we need to use 
"body-parse" to clean up the "request object" before using them 


body-parse is a middleware 


How do we use middleware in express? Is the order important? and how?
We can use the "use" method 


e.g. 
app.use(bodyParser.urlencoded({extended:true}))

The order is important and it must be declared before the CRUD handlers 

handlers: 
app.get('/', (req, res) => {/*...*/})
app.post('/quotes', (req, res) => {/*...*/})











