import lwc from '@lwc/rollup-plugin';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import * as fs from 'fs';
const pkg = require('./package.json');

function generateComponentConfig() {
	fs.rmSync("tnf-lwc-build", { recursive: true, force: true });
	const dir = fs.readdirSync("./src/modules/tnf");
	return dir.map(folderName => {
		return {
			external : [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)],
			input: [`src/modules/tnf/${folderName}/${folderName}.js`],
			output: [
				{ file: `tnf-lwc-build/${folderName}/${folderName}.mjs`, 'format': 'es' },
				{ file: `tnf-lwc-build/${folderName}/${folderName}.js`, 'format': 'umd', name: folderName }
			],
			plugins: [
				replace({
					'process.env.NODE_ENV': JSON.stringify('development'),
				}),
				lwc(),
				resolve(),
				terser()
			],
		};
	});
}

export default [
    ...generateComponentConfig(),
		{
			external : [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)],
			input: "./src/main.js",
			output: [
				{ file: `tnf-lwc-build/tnf-lib.mjs`, 'format': 'es' },
				{ file: `tnf-lwc-build/tnf-lib.js`, 'format': 'umd', name: 'tnf-lib' }
			],
			plugins: [
				replace({
					'process.env.NODE_ENV': JSON.stringify('development'),
				}),
				lwc(),
				resolve(),
				terser()
			],
		}
];