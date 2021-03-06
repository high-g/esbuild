const { argv } = require('process')
const { build } = require('esbuild')
const path = require('path')

const options = {
  define: { 'process.env.NODE_ENV': process.env.NODE_ENV },
  entryPoints: [path.resolve(__dirname, 'src/index.tsx')],
  minify: argv[2] === 'productions',
  bundle: true,
  target: 'es2016',
  platform: 'browser',
  outdir: path.resolve(__dirname, 'dist'),
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
}

build(options).catch((err) => {
  process.stderr.write(err.stderr)
  process.exit(1)
})
