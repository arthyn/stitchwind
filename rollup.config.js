import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/token-loader/index.ts',
  output: [
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'stitchwind',
    },
  ],
  plugins: [typescript({
      tsconfigOverride: {
          compilerOptions: {
              module: 'ESNext'
          }
      }
  })],
};