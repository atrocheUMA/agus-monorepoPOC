interface objeto {
  hello: string;
  bye: string;
  hi: string;
}

export function libraryA(): objeto {
  return {
    hello: 'hola2',
    bye: 'chau',
    hi: 'asd',
  };
}
