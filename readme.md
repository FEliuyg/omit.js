# Omit 函数

Utility function to create a shallow copy of an object which had dropped some fields.

## Usage

```bash
npm i --save @xiaoyaoliu/omit
```

```js
import omit from '@xiaoyaoliu/omit';
omit({ name: 'Benjy', age: 18 }, ['name']); // => { age: 18 }
```
