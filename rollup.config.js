import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/cjs.js',
				format: 'cjs',
				sourcemap: true
			},
			{
				file: 'dist/amd.js',
				format: 'amd',
				sourcemap: true
			},
			{
				file: 'dist/umd.js',
				format: 'umd',
				name: 'chyme',
				sourcemap: true
			},
			{
				file: 'dist/iife.js',
				format: 'iife',
				sourcemap: true
			},
			{
				file: 'dist/index.js',
				format: 'es',
				sourcemap: true
			}
		],
		plugins: [typescript()]
	},
	{
		input: 'src/index.ts',
		output: {
			file: 'dist/types.d.ts',
			format: 'es'
		},
		plugins: [dts()]
	}
];
