let express = require("express")
let app = express()
let bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

// homepage route

app.get('/',(req,res)=>{
    return res.send({ 
        err : false,
        message : 'Welcome to RESTful API with NodeJS',
        written_by : 'TimeDown',
        published_on : 'https://www.facebook.com/PumpNtw/'})
})

app.listen(5000,()=>{
    console.log('Server is Running')
})