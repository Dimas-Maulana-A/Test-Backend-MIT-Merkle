const express = require('express');
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config()
app.use(express())
app.use(bodyParser.json())
app.use(cors())


const Tamu = require('./api/Tamu/tamu.router')
app.use('/api', Tamu)

const Admin = require('./api/Admin/admin.router')
app.use('/api', Admin)

app.listen(8080, ()=> console.log("server run at port 8080"))