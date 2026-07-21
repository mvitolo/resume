import theme from 'jsonresume-theme-macchiato'
import { readFileSync, writeFileSync } from 'fs'

const resume = JSON.parse(readFileSync('resume.json', 'utf8'))
writeFileSync('docs/index.html', theme.render(resume))
console.log('Built docs/index.html')
