/**
 * Placeholder asset compression script.
 * Add @gltf-transform/cli and run: node scripts/compress.js public/models
 * Mirrors folio-2025 pipeline for when GLB assets are added.
 */
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const target = resolve(process.argv[2] || 'public/models')
if (!existsSync(target)) {
  console.error('Directory not found:', target)
  process.exit(1)
}
console.log('No GLB files to compress yet. Add models to', target)
console.log('Then install @gltf-transform/cli and extend this script.')
