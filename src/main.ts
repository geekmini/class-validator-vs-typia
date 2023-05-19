import { v4 } from 'uuid';
import { validateTypia } from './typia';
import { validateCls } from './cls-vt';

const data = { id: v4(), email: 'samchon.github@gmail.com', age: 30 };

console.time('typia');
validateTypia(data);
console.timeEnd('typia');

console.time('cls');
validateCls(data);
console.timeEnd('cls');
