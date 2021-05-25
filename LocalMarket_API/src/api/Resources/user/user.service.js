import joi from 'joi';

export default{
    validateUser(body){
        const schema = joi.object().keys({
            firstName: joi.string().required(),
            lastName: joi.string().required(), 
            email: joi.string().required(), 
            role: joi.string().required(), 
            password: joi.string().required()
        })
    
        const {error, value} = schema.validate(body);
        console.log(error);

        if(error && error.details){
            return {error};
        }
        return {value};
    }
}