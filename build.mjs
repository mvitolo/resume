// import from /dist: the package's "." export condition points at raw .jsx
import * as theme from 'jsonresume-theme-nordic-minimal/dist'
import { readFileSync, writeFileSync } from 'fs'

const render = theme.render ?? theme.default?.render
const resume = JSON.parse(readFileSync('resume.json', 'utf8'))
writeFileSync('docs/index.html', render(resume))
console.log('Built docs/index.html')
