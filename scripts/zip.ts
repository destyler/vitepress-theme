import * as fs from 'node:fs'
import archiver from 'archiver'

export function handleZIP(inPath: string, outPath: string) {
  const output = fs.createWriteStream(outPath)
  const archive = archiver('zip', {
    zlib: { level: 9 },
  })

  output.on('close', () => {
    console.log(`${archive.pointer()} total bytes`)
    console.log('archiver has been finalized and the output file descriptor has closed.')
  })

  archive.on('error', (err) => {
    throw err
  })

  archive.pipe(output)

  archive.directory(inPath, false)

  archive.finalize()
}
