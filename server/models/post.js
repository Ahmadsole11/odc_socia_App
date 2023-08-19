import mongoose from 'mongoose';

const PostShema = new mongoose.Schema({
    title: String,
    content: String,
    imageUrl: String,
    userId: mongoose.Schema.Types.ObjectId,
}, {timestamps:true});

const Post = mongoose.model('Post', PostShema);

export default Post;