const app = require('express')()
const multer = require('multer')
const sharp = require('sharp')

const upload = multer()

app.get('/', (req, res) => {
    res.send('working')
})

app.post('/upload', upload.single('file'), async (req, res) => {

    sharp({
        create: {
            width: 200,
            height: 400,
            channels: 4,
            background: { r: 0, g: 144, b: 0 }
        }
    })
    .png()
    .toFile('./outputs/made-up.png')

    res.send('ok')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
