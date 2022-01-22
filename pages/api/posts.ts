import type { NextApiRequest, NextApiResponse } from 'next';
import { data, TPost } from '../../assets/data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TPost[]>
) {
  res.status(200).json(data);
}
