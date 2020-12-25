const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()

const connection_url = `mongodb+srv://gmaharsh:Admin@456123@one-stop.n0brx.mongodb.net/<dbname>?retryWrites=true&w=majority`;

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//Database Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
        console.log("Conneted to Database")
})
.catch((error) => {
    console.log("Error:-", error)
} )

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(2701, () => console.log(`Server running on port 2701`))