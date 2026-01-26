const express = require("express");
const Auth = require("../utils/authMiddleware");
const jobPost = require("../Database/JobsSchema");
const WorkPost = require("../Database/WorkersSchema");

const router = express.Router();

router.delete("/job-post/:id", Auth, async (req, res) => {
  try {

     const postId = req.params.id;

     const Post = await  jobPost.findById(postId)

// User.findByIdAndDelete(id)

if(!Post){
  return res.status(404).json({
    message:"Post not found"
  })
}

if(Post.user.toString() !== req.user.id){
  return res.status(403).json({
    message:"Not allowed to delete the post "
  })
}

     await jobPost.findByIdAndDelete(postId);

     res.status(200).json({
      message:"post deleted successfully"
     })

  } catch (error) {
    console.error(error.message)

    res.status(404).json({
        message:"not found"
    })
  }
});




router.delete('/worker-post/:id', Auth, async(req, res)=>{
  try{

    const postId = req.params.id;

    const Dpost = await WorkPost.findById(postId);

    if(!Dpost){
       return res.status(404).json({
        message:"user not found"
       })
    }

    if(Dpost.user.toString() !== req.user.id){
      return res.status(403).json({
        message:"Not allowed to delete"
      })
    }

    await WorkPost.findByIdAndDelete(postId);

    res.status(200).json({
      message:"Post Deleted"
    })


  }catch(error){
    console.error(error)
    res.status(500).json({
      message:"Not found"
    })
  }
})


module.exports = router;
