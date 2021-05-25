import User from './user.model';
import userService from './user.service';

export default{
    async createUser(req,res){
        try{
            const {error, value} = userService.validateUser(req.body);
        if(error && error.details){
            return res.status(500).json(error.details);
        }
        
        await User.create(value).then(user => res.json(user))
        .catch(err => res.status(500).json(err));
        }catch(err){
            console.log(err);
        }
    },

    findAllUsers(req,res){
        User.find().then(users => res.json(users)).catch(err => res.status(404).json(err));
    },

    deleteUser(req,res){
        const id = req.params.id;
        User.findByIdAndRemove(id).then(user => {
            if(!user){
                return res.status(400).json({err: "user not found."});
            }
            return res.json(user);
        }).catch(err => res.status(500).json(err)); 
    },

    updateUser(req,res){
        const id = req.params.id;

        User.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(user => {
            if(!user){
                return res.status(400).json({err: "user not found"});
            }
            return res.json(user);
        }).catch(err => res.status(500).json(err));
    }
}