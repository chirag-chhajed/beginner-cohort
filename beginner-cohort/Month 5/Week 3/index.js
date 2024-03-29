import express from "express"
import dotenv from "dotenv"
import tasks from "./routes/tasks.js"
import connectDB from "./config/connectDB.js"
import mongoose from "mongoose"
import cors from "cors"
import corsOptions from "./config/corsOptions.js"

dotenv.config()
connectDB()

const app = express()

const port = process.env.PORT || 5001

app.use(cors(corsOptions))
app.use(express.json())
// app.use('/','Hello World')
app.use('/api/v1/tasks',tasks)



mongoose.connection.once('open',()=>{
    console.log(`Connected to MongoDB`)
    app.listen(port,()=>{
        console.log(`Server is listening on the port ${port}`)
    })
})

