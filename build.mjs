import * as theme from 'jsonresume-theme-claude'
import { readFileSync, writeFileSync } from 'fs'

const render = theme.render ?? theme.default?.render
const resume = JSON.parse(readFileSync('resume.json', 'utf8'))
writeFileSync('docs/index.html', render(resume))
console.log('Built docs/index.html')
