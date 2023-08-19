import {createPost,getPosts, getPost, updatePost, deletePost}  from '../controllers/postController.js'

import protect from '../middlewares/protect.js'
import express from 'express';

const router = express.Router();

router.post('/', protect, createPost)
router.get('/', protect, getPosts)
router.get('/:id', protect, getPost)
router.patch('/:id', protect, updatePost)
router.delete('/:id', protect, deletePost)

export default router