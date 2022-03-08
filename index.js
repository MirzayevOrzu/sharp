const app = require('express')()
const multer = require('multer')
const sharp = require('sharp')

const upload = multer()

app.get('/', (req, res) => {
    res.send('working')
})

app.post('/upload', upload.single('file'), async (req, res) => {

    const image = await sharp(req.file.buffer, { animated: true })
    image
        .metadata()
        .then(metadata => {
            return image
                .resize(Math.round(metadata.width / 2))
                .webp()
                .toFile('./outputs/sample.webp')
        })

    res.send('ok')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
