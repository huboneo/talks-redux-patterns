const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, 'src')
const res = {}

const versions = fs.readdirSync(root)

versions.forEach(version => {
  const dirs = [path.join(root, version)]
  while (dirs.length) {
    const dir = dirs.shift()
    fs.readdirSync(dir).forEach(p => {
      const here = path.join(dir, p)
      if (fs.statSync(here).isDirectory()) {
        dirs.push(here)
      } else {
        const minusRoot = here.replace(path.join(root, version) + '/', '')
        res[minusRoot] = res[minusRoot] || { versions: {}, name: minusRoot }
        res[minusRoot].versions[version] = {
          file: fs.readFileSync(here).toString()
        }
      }
    })
  }
})

for (const file in res) {
  const f = res[file]
  versions.forEach((v, n) => {
    const fileV =
      res[file].versions[v] || (res[file].versions[v] = { file: '' })
    const prevV = versions[n - 1]
    const prevFileV = (prevV && res[file].versions[prevV]) || {}
    fileV.state = !fileV.file
      ? prevFileV.file
        ? 'deleted'
        : 'nonexistent'
      : !prevFileV.file
      ? 'created'
      : prevFileV.file === fileV.file
      ? 'unchanged'
      : 'edited'
  })
}

fs.writeFileSync(
  path.join(__dirname, 'fileDiff.json'),
  JSON.stringify(
    {
      files: res,
      versions
    },
    null,
    2
  )
)