import { Except } from 'type-fest';

export type Foo = Except<{ a: '1', b: '2' }, 'a'>;