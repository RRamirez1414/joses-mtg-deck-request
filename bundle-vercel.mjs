import { build } from 'esbuild'
import glob from 'tiny-glob'
;(async () => {
  let entryPoints = await glob('api-dev/**/*.ts', {
    absolute: true,
  })
  await build({
    entryPoints,
    bundle: true,
    outdir: './api',
    platform: 'node',
    target: 'node22',
  })
})()
