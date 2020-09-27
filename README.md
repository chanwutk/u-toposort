# Universal Topological Sort

## Supports both JavaScript/TypeScript and HTML imports

[![](https://data.jsdelivr.com/v1/package/npm/u-toposort/badge)](https://www.jsdelivr.com/package/npm/u-toposort)

## JavaScript/TypeScript import example

### installation

```bash
npm install u-toposort
```

### Using `import`

```typescript
import toposort from 'u-toposort';

const edges: [number, number][] = [
  [1, 2],
  [2, 3],
];

console.log(toposort(edges));
// [1, 2, 3]
```

### Using `require`

```javascript
const toposort = require('u-toposort');

const edges: [string, string][] = [
  ['1', '2'],
  ['2', '3'],
];

console.log(toposort(edges));
// ['1', '2', '3']
```

## HTML import example

```html
<html lang="en">
  <head>
    <script src="https://cdn.jsdelivr.net/npm/u-toposort/build/toposort.min.js"></script>
  </head>
  <body>
    <script>
      console.log(
        toposort([
          [1, 2],
          [2, 3],
        ]),
      );
    </script>
  </body>
</html>
```

## API

this module only export `toposort` function (and as default). Here is its
function signature:

```typescript
function toposort<N>(edges: [N, N][]): N[];
```

## Reference

- https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/
