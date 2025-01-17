import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              }
        );
        console.log("Mongodb connected...");
        
    } catch (error) {
        console.log("error ocurred",error);
        
    }
}

export default connectDB;