import { libraryC } from '@uma/libraryC';

export function libraryB(): object {
  const c = libraryC();
  return {
    asd: 'asd',
  };
}
