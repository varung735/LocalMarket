import { number } from 'joi';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const customerSchema = new Schema({
    userId:{
        ref:'User',
        type:Schema.Types.ObjectId,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    Locality:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    PinCode:{
        type:Number,
        required:true
    }
})
export default new mongoose.model('customerInfo', customerSchema);