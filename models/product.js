var mongoose = require("mongoose");
var productschema = mongoose.Schema({
    Coursename:String,
    Courseid:Number,
    Courseduration:Number,
    fee:Number,
});
const productmodel = mongoose.model("products",productschema);

module.exports=productmodel;