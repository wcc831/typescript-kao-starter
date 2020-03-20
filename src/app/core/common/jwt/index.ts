import jwt from 'jsonwebtoken'
import { k } from 'src/project-env'

export function tokenize(payload: any, secret: string | null = null): string {
  return jwt.sign(payload, secret || k.JWT_SECRET || 'secret');
}

export function detokenize(token: string, secret: string | null = null): any {
  if (!jwt.verify(token, secret || k.JWT_SECRET || 'secret')) {}

  return jwt.decode(token);
}