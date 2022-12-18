import { Schema,model } from "mongoose";

const TasksSchema = new Schema({
    task: {
        type:String,
        required: [true,'must provide name'],
        trim: true,
    },
    completed: {
        type:Boolean,
        default: false
    }
})

export default model('Task',TasksSchema)