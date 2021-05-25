import joi from 'joi';

export default{
    validateSeller(body){
        const schema = joi.object().keys({
            user_Id: joi.string().required(),
            BusinessName: joi.string().required(),
            GST_no: joi.string().required(),
            PAN_no: joi.string().required(),
            Aadhar_no: joi.string().required(),
            Bank_name: joi.string().required(),
            AC_no: joi.string().required()
        });

        const {error, value} = schema.validate(body);
        
        console.log(error);

        if(error && error.details){
            return {error};
        }
        return {value};
    }
}