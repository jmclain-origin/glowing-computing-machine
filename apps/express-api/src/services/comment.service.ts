import Comment, { IComment } from '../models/comment.model';

/**
 * Creates a new comment.
 * @param {IComment} commentData - The comment data to create.
 * @returns {Promise<IComment>} - A promise that resolves to the created comment.
 * @throws {Error} - If there is an error creating the comment.
 */
const createComment = async (commentData: IComment): Promise<IComment> => {
  try {
    const newComment = new Comment(commentData);
    const savedComment = await newComment.save();
    return savedComment;
  } catch (error) {
    throw new Error('Failed to create comment');
  }
};

/**
 * Retrieves a comment by its ID.
 * @param {string} commentId - The ID of the comment to retrieve.
 * @returns {Promise<IComment | null>} - A promise that resolves to the retrieved comment or null if not found.
 * @throws {Error} - If there is an error retrieving the comment.
 */
const getCommentById = async (commentId: string): Promise<IComment | null> => {
  try {
    const comment = await Comment.findById(commentId);
    return comment;
  } catch (error) {
    throw new Error('Failed to get comment');
  }
};

/**
 * Updates a comment by its ID.
 * @param {string} commentId - The ID of the comment to update.
 * @param {Partial<IComment>} commentData - The partial comment data to update.
 * @returns {Promise<IComment | null>} - A promise that resolves to the updated comment or null if not found.
 * @throws {Error} - If there is an error updating the comment.
 */
const updateCommentById = async (
  commentId: string,
  commentData: Partial<IComment>
): Promise<IComment | null> => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      commentData,
      { new: true }
    );
    return updatedComment;
  } catch (error) {
    throw new Error('Failed to update comment');
  }
};

/**
 * Deletes a comment by its ID.
 * @param {string} commentId - The ID of the comment to delete.
 * @returns {Promise<void>} - A promise that resolves when the comment is deleted.
 * @throws {Error} - If there is an error deleting the comment.
 */
const deleteCommentById = async (commentId: string): Promise<void> => {
  try {
    await Comment.findByIdAndDelete(commentId);
  } catch (error) {
    throw new Error('Failed to delete comment');
  }
};

/**
 * Retrieves all comments by user ID.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<IComment[]>} - A promise that resolves to an array of comments by the user.
 * @throws {Error} - If there is an error retrieving the comments.
 */
const getAllCommentsByUserId = async (userId: string): Promise<IComment[]> => {
  try {
    const comments = await Comment.find({ userId });
    return comments;
  } catch (error) {
    throw new Error('Failed to get comments by user ID');
  }
};

/**
 * Retrieves all comments by blog post ID.
 * @param {string} postId - The ID of the blog post.
 * @returns {Promise<IComment[]>} - A promise that resolves to an array of comments on the blog post.
 * @throws {Error} - If there is an error retrieving the comments.
 */
const getAllCommentsByPostId = async (postId: string): Promise<IComment[]> => {
  try {
    const comments = await Comment.find({ postId });
    return comments;
  } catch (error) {
    throw new Error('Failed to get comments by post ID');
  }
};

/**
 * Retrieves all subcomments by comment ID.
 * @param {string} commentId - The ID of the comment.
 * @returns {Promise<IComment[]>} - A promise that resolves to an array of subcomments on the comment.
 * @throws {Error} - If there is an error retrieving the subcomments.
 */
const getAllSubCommentsByCommentId = async (
  commentId: string
): Promise<IComment[]> => {
  try {
    const subcomments = await Comment.find({ parentCommentId: commentId });
    return subcomments;
  } catch (error) {
    throw new Error('Failed to get subcomments by comment ID');
  }
};

export default {
  createComment,
  getCommentById,
  updateCommentById,
  deleteCommentById,
  getAllCommentsByUserId,
  getAllCommentsByPostId,
  getAllSubCommentsByCommentId,
};
