interface objeto {
  hello: string;
  bye: string;
  hi: string;
}

export function libraryA(): objeto {
  return {
    hello: 'hola3',
    bye: 'chau',
    hi: 'asd',
  };
}
