// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { data } from '../../assets/data';

type TData = {
  name: string;
  age: number;
  count: number;
};

type TError = {
  error: string;
};

const error: TError = { error: 'Not found' };

const URL = process.env.AGIFY_API || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData | TError>
) {
  if ('name' in req.query) {
    const name = req.query.name;
    const url = URL + '?name=' + name;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        res.status(500).json(error);
      }
    } catch (err) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).json(error);
  }
}
