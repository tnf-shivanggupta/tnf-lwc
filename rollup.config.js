import lwc from '@lwc/rollup-plugin';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import * as fs from 'fs';

function generateComponentConfig() {
	fs.rmSync("build", { recursive: true, force: true });
	const dir = fs.readdirSync("./src/modules/tnf");
	return dir.map(folderName => {
		return {
			input: [`src/modules/tnf/${folderName}/${folderName}.js`],
			output: [
				{ file: `build/${folderName}/${folderName}.mjs`, 'format': 'es' },
				{ file: `build/${folderName}/${folderName}.js`, 'format': 'umd', name: folderName }
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
    ...generateComponentConfig()
];