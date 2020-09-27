import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';

import pkg from './package.json';

const output = {
  sourcemap: true,
  format: 'umd',
  name: 'toposort',
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      sourcemap: true,
      format: 'esm',
    },
    {...output, file: pkg.main},
    {...output, file: pkg.jsdelivr, plugins: [terser()]},
  ],
  plugins: [typescript({tsconfig: 'tsconfig.json'}), bundleSize()],
};
