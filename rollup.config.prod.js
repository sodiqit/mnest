import typeScript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.min.js',
            format: 'cjs',
            name: 'version',
            plugins: [terser()],
        },
    ],
    plugins: [
        typeScript(),
    ],
};
