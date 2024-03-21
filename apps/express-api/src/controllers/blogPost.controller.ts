import { Request, Response } from 'express';
import BlogPost from '../models/blogPost.model';

// Get all blog posts
export const getAllBlogPosts = async (req: Request, res: Response) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a single blog post by ID
export const getBlogPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const blogPost = await BlogPost.findById(id);
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get blog posts by a specific parameter (e.g., category)
export const getBlogPostsByParameter = async (req: Request, res: Response) => {
  const { parameter } = req.params;
  try {
    const blogPosts = await BlogPost.find({ parameter });
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create a new blog post
export const createBlogPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    const newBlogPost = await BlogPost.create({ title, content });
    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update/edit a blog post by ID
export const updateBlogPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(updatedBlogPost);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a blog post by ID
export const deleteBlogPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedBlogPost = await BlogPost.findByIdAndDelete(id);
    if (!deletedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
