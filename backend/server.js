const express = require( "express" )

const moongoose = require( "mongoose" )
require( "dotenv" ).config()

const cors = require( "cors" )

const app = express()
const PORT = process.env.PORT | 3000

app.use(express.json());
app.use(cors());

app.get( "/", (req, res) => {
    res.send( "Hellow World!"  )
});

app.listen( PORT, () => console.log( "LIstening at ${PORT}"));


console.log('hellow')