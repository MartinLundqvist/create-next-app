import type { NextApiRequest, NextApiResponse } from 'next';
import { data, TPost } from '../../../assets/data';

type TError = {
  error: string;
};

const notfound: TError = {
  error: 'Post not found',
};

const malformed: TError = {
  error: 'Malformed request',
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TPost | TError>
) {
  const { postId } = req.query;
  if (typeof postId === 'string') {
    const id = parseInt(postId, 10);
    let post = data.find((post) => post._id === id);

    if (post) {
      res.status(200).json(post);
    } else {
      res.status(500).json(notfound);
    }
  } else {
    res.status(500).json(malformed);
  }
}
