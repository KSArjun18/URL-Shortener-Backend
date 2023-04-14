const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique : [true , "Email is allready exists"]},
        password: { type: String, required: true },
        isAdmin: {
            type: String,
            default: "none"
        }, 
        createdAt: { type: Date, default: Date.now }

    },
    // { timestamps: true }
);

const UserDetails = mongoose.model("Users", UserSchema);
module.exports = {UserDetails}