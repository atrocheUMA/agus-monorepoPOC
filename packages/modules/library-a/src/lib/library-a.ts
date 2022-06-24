import { libraryB } from '@uma/libraryB';

interface objeto {
  hello: string;
  bye: string;
  hi: string;
}

export function libraryA(): objeto {
  const asd = libraryB;
  return {
    hello: 'hola',
    bye: 'chau',
    hi: 'asd',
  };
}
