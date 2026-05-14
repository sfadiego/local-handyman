'use server';
import bcrypt from 'bcrypt';

export const encryptPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (
  myPlaintextPassword: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(myPlaintextPassword, hash);
};
