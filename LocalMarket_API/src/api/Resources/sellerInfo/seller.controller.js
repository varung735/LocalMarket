import seller_info from './seller.model';

export default{

    findSellers(req,res){
        seller_info.find().then(seller => res.json(seller)).catch(err => res.status(500).json(err));
    },

    addSeller(req,res){
        let{user_Id, BusinessName, GST_no, PAN_no, Aadhar_no, Bank_name, AC_no} = req.body;

        seller_info.create(user_Id, BusinessName, GST_no, PAN_no, Aadhar_no, Bank_name, AC_no).populate(user_Id).then(seller => res.json(seller))
        .catch(err => res.status(500).json(err));
    }

}