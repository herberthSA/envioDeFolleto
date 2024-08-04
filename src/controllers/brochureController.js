import broucherService from "../services/broucherService.js";

const brochureController ={}

brochureController.sendEmail = async(req,res)=>{
    try {
        const file = req.file;
        const subject = req.body.subject;
        const result = await broucherService.sendEmail(file,subject);
        console.log(result)
        if(result.success){
            res.status(200).send(result.message);
        }
        else{
            res.status(500).send(result.message);

        }
        
    } catch (error) {
        res.status(500).send(error);
    }
    
}


export default  brochureController;