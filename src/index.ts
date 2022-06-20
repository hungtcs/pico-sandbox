export interface SandboxOptions {
  throwOnUndefined?: boolean;
}

export class Sandbox {
  public static cache = new WeakMap();

  private constructor() {

  }

  public static compile(expression: string, options: SandboxOptions = {}) {
    return (context: any = {}) => {
      let _context = Sandbox.cache.get(context);
      if (!_context) {
        _context = new Proxy(
          context,
          {
            get: (target, p) => {
              if (p === Symbol.unscopables) {
                return undefined;
              }
              const value = target[p];
              if (options.throwOnUndefined && value === undefined) {
                throw new ReferenceError(`${ p.toString() } is not defined`);
              }
              return value;
            },
            has: () => true,
          },
        );
        Sandbox.cache.set(context, _context);
      }
      return (new Function('context', `with(context) { return (${ expression }) }`))(_context);
    };
  }

}
