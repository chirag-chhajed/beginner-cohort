import express from "express"
import path,{dirname} from "path"
import { fileURLToPath } from 'url';
import students from "./routes/students.js"

const app = express()
const port = 5000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname)


// app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname,"/public")));

app.use(express.json())

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public","/index.html"))
})
console.log(dirname('./'))

app.use('/api/v1/students',students)

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`)
})