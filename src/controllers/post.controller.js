import { Post } from "../models/post.model.js";

const getAllPost = async(req,res)=>{
    const allPost = await Post.find();
    if(!allPost) return res.status(401).send({msg:" no article is present",success:false})

    return res.status(200).send({allPost,success:true});
}

const getSinglePost =async(req,res)=>{
    const{id} = req.params;
    const checkArticleIsPresent = await Post.findOne({_id:id});
    if(!checkArticleIsPresent) return res.status(401).send({msg:"id is not present",success:false});
    return res.status(200).send({checkArticleIsPresent,success:true});
}

const publishPost =async(req,res)=>{
    try {
        const { title, content, author } = req.body;
    
        const checkArticleIsPresent = await Post.find({ title: title }); 
        if (checkArticleIsPresent.length !== 0) {

            return res.status(401).send({ msg: "Article is already present." ,success:false});
        }
    
        const savePost = await Post.create({ title, content, author });
        if (!savePost) {
         
            return res.status(401).send({ msg: "Error in saving the post", success: false });
        }
    
        return res.status(200).send({ savePost, success: true });
    } catch (error) {
      
        return res.status(500).send({ msg: "Internal server error.", success: false });
    }
    
   


}
export { getAllPost, getSinglePost, publishPost };

