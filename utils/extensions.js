const jsExtensions = ['.cjs', '.mjs', '.js', '.jsx']

const tsExtensions = ['.ts', '.tsx', '.d.ts']

const platformSubextensions = ['.android', '.ios', '.web', '.native']

function computeExpoExtensions(baseExtensions, platformSubextensions) {
  const expoExtensions = []
  for (const platform of [...platformSubextensions, '']) {
    for (const base of baseExtensions) {
      expoExtensions.push(`${platform}${base}`)
    }
  }
  return expoExtensions
}

const allExtensions = computeExpoExtensions([...jsExtensions, ...tsExtensions], platformSubextensions)

export { allExtensions, jsExtensions, tsExtensions }
