const path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mainRoutes = require('./routes/main')


// .env in config
dotenv.config({path: './config/.env'})


app.set('views', path.join(__dirname, 'views'));
//Using EJS for views
app.set("view engine", "ejs");


//Static Folder
app.use(express.static("public"));

//body parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes
app.use("/", mainRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
}) 
