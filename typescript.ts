var arr : { [key:string]:number; } = {};

interface IPerson {
  name:string
}
type MyMapLikeType = Record<string, IPerson>;
const peopleA: MyMapLikeType = {
    "a": { name: "joe" },
    "b": { name: "bart" },
};

interface Map<K, V> {
  clear(): void;
  delete(key: K): boolean;
  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void,thisArg?: any): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
  readonly size: number;
 }
  
  class Item {
   configs: Map<string, string>;
   constructor () {
     this.configs = new Map();
   }
}
