import seller_info from './seller.model';
import sellerService from './seller.service';

export default{

    findSellers(req,res){
        seller_info.find({}).populate('user_Id').then(seller => res.json(seller)).catch(err => res.status(500).json(err));
    },

    async addSeller(req,res){
        try{
            const {error, value} = sellerService.validateSeller(req.body);
            if(error && error.details){
                return res.status(500).json(error.details);
            }

            await seller_info.create(value).then(seller => res.json(seller))
            .catch(err => res.status(500).json(err));

        } catch(err){
            console.log(err);
        }
    },

    deleteSeller(req,res){
        const id = req.params.id;

        seller_info.findByIdAndRemove(id).then(seller => res.json(seller))
        .catch(err => res.status(500).json(err));
    },

    updateSeller(req,res){
        const id = req.params.id;

        seller_info.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(seller => {
            if(!seller){
                return res.status(400).json({err: "seller not found"});
            }
            return res.json(seller);
        })
        .catch(err => res.status(500).json(err));
    }

}