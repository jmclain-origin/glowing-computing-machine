import { Request, Response } from 'express';
import BlogPost from '@/models/blogPost.model';

// Create a new blog post
export const createBlogPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const newBlogPost = new BlogPost({ title, content });
    const savedBlogPost = await newBlogPost.save();
    res.status(201).json(savedBlogPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog post' });
  }
};

// Get all blog posts
export const getAllBlogPosts = async (req: Request, res: Response) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get blog posts' });
  }
};

// Get a single blog post by ID
export const getBlogPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get blog post' });
  }
};

// Update a blog post by ID
export const updateBlogPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedBlogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(updatedBlogPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog post' });
  }
};

// Delete a blog post by ID
export const deleteBlogPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBlogPost = await BlogPost.findByIdAndDelete(id);
    if (!deletedBlogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
};
