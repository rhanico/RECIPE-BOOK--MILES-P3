const express = require( "express" );

const mongoose = require( "mongoose" );
require( "dotenv" ).config()

const cors = require( "cors" )

const app = express()
const PORT = process.env.PORT | 3000

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to the Kitchen!"))
.catch((err) => console.log(err));

app.listen( PORT, () => console.log( "LIstening at ${PORT}"));
