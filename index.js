const app = require('express')()
const multer = require('multer')
const sharp = require('sharp')

const upload = multer()

app.get('/', (req, res) => {
    res.send('working')
})

app.post('/upload', upload.single('file'), async (req, res) => {

    await sharp(req.file.buffer, { animated: true }).toFile(`./outputs/sample.webp`)

    res.send('ok')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
