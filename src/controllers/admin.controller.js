import { Pdf } from "../models/pdf.model.js";

const uploadPdfController =async(req,res)=>{
    const{pdfName,pdfSem,pdfYear} = req.body;
    console.log(pdfYear);
    const existedPdf = await Pdf.findOne({pdfName:pdfName,pdfYear:pdfYear})
    if(existedPdf)
    {
        return res.status(200).send({msg:"Pdf is already there"})

    }
    const localFile = req.file?.path;

   const pdfLink = req.file.originalname;
   console.log(pdfLink);

    const pdfDetails = {
     pdfName:pdfName,
     pdfSem:pdfSem,
     pdfYear:pdfYear,
     pdfLink:pdfLink,

    }
    const resFromDb = await Pdf.create(pdfDetails)
   return res.status(200).send({
    success :true,
    resFromDb,
    msg:"Pdf is saved in db.."
   })

}
const numberOfPdf = async(req,res)=>{
    try {
        const numberOfPdf = await Pdf.find();
        if(numberOfPdf.length===0) return res.status(200).send({msg:"No pdf ",sucess:false})
        
        return res.status(200).send({msg:"Pdf is present",numberOfPdf})
    } catch (error) {
        
    }

}

const singlePdfInfo =async(req,res)=>{
        try {
            const{name} = req.params;
           const response =  await Pdf.findOne({"pdfName":name})
           if(!response) return res.status(300).send({msg:"Pdf is not present..",success : false});

           return res.status(200).send({msg: "Pdf data",success:true,response})
        } catch (error) {
            console.log(error);
        }
}
export { numberOfPdf, singlePdfInfo, uploadPdfController };

