import axios from 'axios';

interface objeto {
  hello: string;
  bye: string;
  hi: string;
}

export function libraryA(): objeto {
  const axios2 = axios;
  return {
    hello: 'holaasd2345672asd',
    bye: 'chau',
    hi: 'asd',
  };
}
