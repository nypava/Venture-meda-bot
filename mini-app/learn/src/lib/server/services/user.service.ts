import User from "$lib/server/models/user.model";
import type { IUser } from "$lib/server/models/user.model";


export const findByUserId = async function (user_id: string): Promise<IUser | null> {
  return await User.findOne({ user_id });
};

export const addUser = async (userData: IUser) => {
    const user = new User(userData);
    await user.save();
};

export const updateUserById = async function(userId: number, updateData: Partial<IUser>): Promise<IUser | null> {
  const updatedUser = await User.findOneAndUpdate(
    { user_id: userId },
    { $set: { info: updateData } },
  );

  if (!updatedUser) {
    throw new Error("User not found");
  }

  return updatedUser;
};
