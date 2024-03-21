import BlogPost, { IBlogPost } from '../models/blogPost.model';

/**
 * Creates a new blog post.
 * @param {Partial<IBlogPost>} data - The data for the new blog post.
 * @returns {Promise<IBlogPost>} - A promise that resolves to the saved blog post.
 * @throws {Error} - If there is an error creating the blog post.
 */
const createBlogPost = async (data: Partial<IBlogPost>): Promise<IBlogPost> => {
  try {
    const newBlogPost = new BlogPost(data);
    const savedBlogPost = await newBlogPost.save();
    return savedBlogPost;
  } catch (error) {
    throw new Error('Failed to create blog post');
  }
};

/**
 * Retrieves all blog posts.
 * @returns {Promise<IBlogPost[]>} - A promise that resolves to an array of all blog posts.
 * @throws {Error} - If there is an error retrieving the blog posts.
 */
const getAllBlogPosts = async (): Promise<IBlogPost[]> => {
  try {
    const blogPosts = await BlogPost.find();
    return blogPosts;
  } catch (error) {
    throw new Error('Failed to get all blog posts');
  }
};

/**
 * Retrieves a blog post by ID.
 * @param {string} id - The ID of the blog post to retrieve.
 * @returns {Promise<IBlogPost | null>} - A promise that resolves to the blog post with the given ID, or null if not found.
 * @throws {Error} - If there is an error retrieving the blog post.
 */
const getBlogPostById = async (id: string): Promise<IBlogPost | null> => {
  try {
    const blogPost = await BlogPost.findById(id);
    return blogPost;
  } catch (error) {
    throw new Error('Failed to get blog post by ID');
  }
};

/**
 * Updates a blog post by ID.
 * @param {string} id - The ID of the blog post to update.
 * @param {Partial<IBlogPost>} data - The data to update on the blog post.
 * @returns {Promise<IBlogPost | null>} - A promise that resolves to the updated blog post, or null if not found.
 * @throws {Error} - If there is an error updating the blog post.
 */
const updateBlogPostById = async (
  id: string,
  data: Partial<IBlogPost>
): Promise<IBlogPost | null> => {
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedBlogPost;
  } catch (error) {
    throw new Error('Failed to update blog post by ID');
  }
};

/**
 * Deletes a blog post by ID.
 * @param {string} id - The ID of the blog post to delete.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if the delete was successful.
 * @throws {Error} - If there is an error deleting the blog post.
 */
const deleteBlogPostById = async (id: string): Promise<boolean> => {
  try {
    await BlogPost.findByIdAndDelete(id);
    return true;
  } catch (error) {
    throw new Error('Failed to delete blog post by ID');
  }
};
/**
 * Gets blog posts that match the given keywords.
 * @param {string[]} keywords - Array of keywords to match against blog posts.
 * @returns {Promise<IBlogPost[]>} - A promise that resolves to an array of blog posts containing the keywords.
 * @throws {Error} - If there is an error retrieving the blog posts.
 */
const getBlogPostsByKeywords = async (
  keywords: string[]
): Promise<IBlogPost[]> => {
  try {
    const blogPosts = await BlogPost.find({ keywords: { $in: keywords } });
    return blogPosts;
  } catch (error) {
    throw new Error('Failed to get blog posts by keywords');
  }
};

/**
 * Increments the upVote count on a blog post by 1.
 * @param {string} id - The ID of the blog post to increment the upVote on.
 * @returns {Promise<IBlogPost | null>} - A promise that resolves to the updated blog post with the incremented upVote, or null if not found.
 * @throws {Error} - If there is an error incrementing the upVote.
 */
const incrementUpVote = async (id: string): Promise<IBlogPost | null> => {
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      id,
      { $inc: { upVote: 1 } },
      { new: true }
    );
    return updatedBlogPost;
  } catch (error) {
    throw new Error('Failed to increment up vote');
  }
};

/**
 * Increments the downVote count on a blog post by 1.
 * @param {string} id - The ID of the blog post to increment the downVote on.
 * @returns {Promise<IBlogPost | null>} - A promise that resolves to the updated blog post with the incremented downVote, or null if not found.
 * @throws {Error} - If there is an error incrementing the downVote.
 */
const incrementDownVote = async (id: string): Promise<IBlogPost | null> => {
  try {
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      id,
      { $inc: { downVote: 1 } },
      { new: true }
    );
    return updatedBlogPost;
  } catch (error) {
    throw new Error('Failed to increment down vote');
  }
};

/**
 * Exports an object containing functions for managing blog posts.
 * Includes CRUD operations and utilities for searching, voting, etc.
 */
export default {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPostById,
  deleteBlogPostById,
  getBlogPostsByKeywords,
  incrementUpVote,
  incrementDownVote,
};
