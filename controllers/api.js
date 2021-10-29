const Post = require('../models/posts')
const fs = require('fs')

module.exports = class API{
    // Tous les objets
    static async fetchAllPost(req,res){
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
    }
      // objet par ID
    static async fetchPostByID(req,res){
        const id = req.params.id;
        try{
            const post = await Post.findById(id);
            res.status(200).json(post);
        } catch(err) {
            res.status(404).json({message: err.message});
        }
    }
      // créer post 
    static async createPost(req,res){
        const post = req.body;
        try {
        await Post.create(post);
        res.status(201).json({message: 'créé avec succès!'});
        }
        catch(err){
        res.status(400).json({message:err.message});
        }
    }
    // modifier post 
    static async updatePost(req,res){
        const id = req.params.id;
        const newPost = req.body;

      try {
        await Post.findByIdAndUpdate(id, newPost);
        res.status(200).json({message: 'modifier avec succès!'});
      } catch(err){
        res.status(404).json({message:err.message});
      }
     }

    // supprimer post 
    static async deletePost(req,res){
      const id = req.params.id;
      try {
          const result = await Post.findByIdAndDelete(id);
          res.status(200).json({message: 'suprimer avec succès!'});
      } catch (err) {
        res.status(404).json({message:err.message});
      }
    }
}