import { libraryC } from '@uma/library-c';

export function libraryB(): object {
  const c = libraryC();
  return {
    asd: 'asd',
  };
}
