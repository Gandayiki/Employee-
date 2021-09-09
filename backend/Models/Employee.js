const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employees = new schema({
    name:{
        type:String,
        unique:true,
    },
    dateOfBirth:{
        type:Date.short(),
        default:Date.now
    },
    gender:{
        type:String,
        default:"Female",
    },
    salary:{
        type:Number,
        default:12000,
    }
},{timestamp:true});

module.exports={
    Employee:mongoose.model("Employee",employees),

}
