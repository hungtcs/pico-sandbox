# Pico Sandbox

Simple javascript expressions sandbox implement via Function.  

## Installation

```shell
npm install pico-sandbox
```

## Examples

```typescript
import { Sandbox } from 'pico-sandbox';

const parser = Sandbox.compile('a + b');
const result = parser({ a: 1, b: 2 });

console.log(result); // 3
```

## Compile Options

- **throwOnUndefined**: throw `ReferenceError` if variable is undefined in expression
