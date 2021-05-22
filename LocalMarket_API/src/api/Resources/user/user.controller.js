import User from './user.model';

export default{
    createUser(req,res){
        let {firstName, lastName, email, role, password} = req.body;

        User.create({firstName, lastName, email, role, password}).then(user => res.json(user))
        .catch(err => res.status(500).json(err));
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
    }
}