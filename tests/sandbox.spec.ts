import assert from 'assert';
import { Sandbox } from '../src';

describe('Sandbox', () => {

  it('should parse expression', () => {
    const parser = Sandbox.compile('a + b');
    const result = parser({ a: 1, b: 2 });
    assert.strictEqual(result, 3);
  });

  it('should shield global variables', () => {
    const parser = Sandbox.compile('Date');
    const result = parser();
    assert.strictEqual(result, undefined);
  });

  it('should throw if variables is undefined', () => {
    assert.throws(
      () => {
        const parser = Sandbox.compile('a + b', { throwOnUndefined: true });
        parser();
      },
      ReferenceError,
    );
  });

});
