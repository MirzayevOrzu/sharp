const app = require('express')()
const multer = require('multer')
const sharp = require('sharp')

const upload = multer()

app.get('/', (req, res) => {
    res.send('working')
})

app.post('/upload', upload.single('file'), async (req, res) => {

    const metadata = await sharp(req.file.buffer).metadata()
    console.log(metadata)
    
    res.send('ok')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
