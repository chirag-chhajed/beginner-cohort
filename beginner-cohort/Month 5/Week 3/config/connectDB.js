import mongoose from "mongoose";

const connectDB = async() => {
    try {
            mongoose.set("strictQuery",false)
            mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (error) {
        console.log(error)
    }
}

export default connectDB