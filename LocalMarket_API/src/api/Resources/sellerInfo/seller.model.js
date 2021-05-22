import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const sellerSchema = new Schema({
    user_Id:{
        ref:'User',
        type:Schema.Types.ObjectId,
        required:true
    },
    BusinessName:{
        type:String,
        required:true
    },
    GST_no:{
        type:String,
        required:true
    },
    PAN_no:{
        type:String,
        required:true
    },
    Aadhar_no:{
        type:String,
        required:true
    },
    Bank_name:{
        type:String,
        required:true
    },
    AC_no:{
        type:String,
        required:true
    }
}, {collection: 'sellerInfo'});
export default new mongoose.model('seller_info', sellerSchema);