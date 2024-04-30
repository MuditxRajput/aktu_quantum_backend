import { Router } from "express";
const router = Router();
router.route('/fake').get((req,res)=>res.send({sucess:true}))

export default router;