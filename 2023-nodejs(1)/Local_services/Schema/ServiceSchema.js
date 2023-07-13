const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServieSchema  = new Schema({

    name : {
        type : String,
        
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : "category"
    },
    subcategory : {
        type : Schema.Types.ObjectId,
        ref : "subcategory"
    },
    description:{
        type :String
    },
    fees : {
        type : Number
    },
    area : {
        type : String
    },
    city : {
        type : String
    },
    state : {
        type : String
    }

},{
    timestamps : true
})

module.exports = mongoose.model('service', ServieSchema)