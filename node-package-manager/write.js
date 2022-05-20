import fs from 'fs'

export const writetoFile = (file, content) => {
    fs.writeFileSync(file, content)
}