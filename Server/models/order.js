const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    customerId:{type:String,required:true},
    products:[{
        id:{type:String},
        name:{type:String},
        price:{type:String},
        image:{type:String},
        description:{type:String},
        cartQuantity:{type:Number},
    }],
    totalItems:{type:Number},
    totalAmount:{type:Number},
    delivery_status:{type:String,default:'pending'},
    payment_status:{type:String,required:true}
},{timestamps:true})
const Order = mongoose.model("Order",orderSchema)
exports.Order = Order