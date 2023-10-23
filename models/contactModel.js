const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        required:[true, "please add the contact name"]
    },
    email:{
        type:String,
        required:[true, "please add your email address"]
    },
    phone:{
        type:String,
        required:[true, "please add your phone number"]
    },
}, {
    timestamps: true,
})


// exports the "Contact" model, which is created based on the defined schema. 
module.exports = mongoose.model("Contact", contactSchema)