import mongoose from "mongoose";

// schema 
const userSchema = new mongoose.Schema(
    {
        username : { type: String, unique: true, required: true},
        message: { type: String, required: true}
    }
);

// reference model
const User = mongoose.model("User", userSchema);

export default User;
