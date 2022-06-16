import {libraryA} from '@mono-poc/library-a'
import {libraryB} from '@mono-poc/library-b'
import {libraryShared} from '@mono-poc/library-shared'

console.log('Hello World!');
console.log(process.env.npm_package_version)
console.log(libraryA())
console.log(libraryB())
console.log(libraryShared())
