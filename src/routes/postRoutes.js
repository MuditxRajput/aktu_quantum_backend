import { Router } from "express";
import { getAllPost, getSinglePost, publishPost } from "../controllers/post.controller.js";
const router = Router();
router.route('/allPost').get(getAllPost)
router.route("/writePost").post(publishPost)
router.route("/singlePost/:id").get(getSinglePost)


export default router;