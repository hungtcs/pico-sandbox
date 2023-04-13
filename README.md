# Pico Sandbox

Simple javascript expressions sandbox implement via Function.  

## Warning

The implementation of pico-sandbox is not absolutely secure, as it cannot restrict the JavaScript prototype chain. For example, the following code can bypass the limitations of the sandbox.

```js
''.constructor.__proto__.constructor("alert()")()
```

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

### Throw On Undefined

```typescript
const parser = Sandbox.compile('a + b', { throwOnUndefined: true });
const result = parser({ a: 1 }); // Error: b is not defined
```

### ES6 Template

```typescript
import { Sandbox } from 'pico-sandbox';

function compileTemplate(template: string, options: SandboxOptions = {}) {
  return Sandbox.compile(`\`${ template }\``, options);
}

const parser = compileTemplate('Hello ${ name }!');
const result = parser({ name: 'Pico' });

console.log(result); // "Hello Pico!"
```

## Compile Options

- **throwOnUndefined**: throw `ReferenceError` if variable is undefined in expression
