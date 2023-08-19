import mongoose from "mongoose";
import Post from "../models/post.js";


// controller for creating a new app
export const createPost = async (req, res)=>{
    const post = req.body

    const newPost = new Post({...post, userdId: req?.user?.id});
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.status(409).json({message: error.message});
    }
};

// controller for getting all posts
export const getPosts = async (req, res)=>{
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch(error){
        res.status(404).json({message: error.message});
    }
};

// getting a single Post
export const getPost = async (req, res)=>{
    const { id } = req.params;
    try{
        const post = await Post.findById(id);
        res.status(200).json(post);
    }catch(error){
        res.status(404).json({message: error.message});
    }
};


// upadating post
export const updatePost = async (req, res)=>{
    const { id } = req.params;
    const post  = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: `no post with ${id}`});
    }
    const oldPost = await Post.findById(id);

    if(oldPost.userId != req.user.id){
        return res.status(403).json({message: `your are not authoriwed to edit this post`});
    }
    const updatedPost = await Post.findByIdAndUpdate(id, {...post, _id: id}, {new: tue})
    res.json(updatedPost)
};

// deleting post
export const deletePost = async (req, res)=>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: `no post with ${id}`});
    }
    const oldPost = await Post.findById(id);

    if(oldPost.userId != req.user.id){
        return res.status(403).json({message: `your are not authoriwed to delete this edit`});
    }
     await Post.findByIdAndDelete(id);
    res.json({message: "Post successfuly deleted"})

};


