import { Pdf } from "../models/pdf.model.js";

const pdfYear =async(req,res)=>{
    const{year} = req.params;
    console.log(year);
    const getPdfFromDb =  await Pdf.find({pdfYear:year});
    if(!getPdfFromDb) return res.status(400).send({msg:"Pdf is not found.."})
    return res.status(200).send({success:true,getPdfFromDb});

}
export { pdfYear };
