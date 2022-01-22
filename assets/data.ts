export type TPost = {
  _id: number;
  name: string;
  message: string;
};

export const data: TPost[] = [
  {
    _id: 1,
    name: 'Martin',
    message: 'This is a test post',
  },
  {
    _id: 2,
    name: 'Kalle',
    message: 'This is also a test post',
  },
  {
    _id: 3,
    name: 'Inger',
    message: 'This is indeed a test post',
  },
  {
    _id: 4,
    name: 'Sara',
    message: 'This is a test post',
  },
  {
    _id: 5,
    name: 'Maria',
    message: 'This is a test post',
  },
];
