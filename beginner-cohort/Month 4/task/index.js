import express from "express"
import students from "./routes/students.js"
const app = express()
const port = 5000


app.use(express.json())

app.use('/api/v1/students',students)

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`)
})