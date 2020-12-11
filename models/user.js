var mongoose = require("mongoose");
var userschema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
});
const usermodel = mongoose.model("users",userschema);

module.exports=usermodel;