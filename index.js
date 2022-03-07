const app = require('express')()
const fs = require('fs')
const multer = require('multer')
const sharp = require('sharp')

const readableStream = fs.createReadStream('./inputs/different_colored_irises_iris_plant.jpg')
const writableStream = fs.createWriteStream('./outputs/different_colored_irises_iris_plant.jpg')
const upload = multer()

app.get('/', (req, res) => {
    res.send('working')
})

app.post('/upload', upload.single('file'), async (req, res) => {

    const transform = sharp()
        .resize(300)
        .on('info', (info) => {
            console.log(`Image height is ${info.height}`)
        })

    readableStream
        .pipe(transform)
        .pipe(writableStream)

    res.send('ok')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
