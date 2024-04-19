import  mongoose  from "mongoose";

const saveCrackerSchema = new mongoose.Schema({
    cracker :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cracker',
    }
})
export const SavedCracker = mongoose.model("SavedCracker",saveCrackerSchema)

