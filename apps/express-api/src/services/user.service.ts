import User, { IUser } from '../models/user.model';

/**
 * Creates a new user.
 * @param {IUser} userData - The user data to create.
 * @returns {Promise<IUser>} - A promise that resolves to the created user.
 * @throws {Error} - If there is an error creating the user.
 */
const createUser = async (userData: IUser): Promise<IUser> => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new Error('Failed to create user');
  }
};

/**
 * Retrieves a user by their ID.
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<IUser | null>} - A promise that resolves to the retrieved user or null if not found.
 * @throws {Error} - If there is an error retrieving the user.
 */
const getUserById = async (userId: string): Promise<IUser | null> => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error('Failed to get user');
  }
};

/**
 * Updates a user by their ID.
 * @param {string} userId - The ID of the user to update.
 * @param {Partial<IUser>} userData - The partial user data to update.
 * @returns {Promise<IUser | null>} - A promise that resolves to the updated user or null if not found.
 * @throws {Error} - If there is an error updating the user.
 */
const updateUserById = async (
  userId: string,
  userData: Partial<IUser>
): Promise<IUser | null> => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, userData, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    throw new Error('Failed to update user');
  }
};

/**
 * Deletes a user by their ID.
 * @param {string} userId - The ID of the user to delete.
 * @returns {Promise<void>} - A promise that resolves when the user is deleted.
 * @throws {Error} - If there is an error deleting the user.
 */
const deleteUserById = async (userId: string): Promise<void> => {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    throw new Error('Failed to delete user');
  }
};

/**
 * Retrieves all users.
 * @returns {Promise<IUser[]>} - A promise that resolves to an array of all users.
 * @throws {Error} - If there is an error retrieving the users.
 */
const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error('Failed to get users');
  }
};

export default {
  deleteUserById,
  createUser,
  getUserById,
  updateUserById,
  getAllUsers,
};
