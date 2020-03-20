import bcrypt from 'bcrypt';

export async function hash(payload: string): Promise<string> {
  return await bcrypt.hash(payload, 10);
}

export async function verifyHash(payload: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(payload, hash);
}