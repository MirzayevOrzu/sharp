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
            height: 200,
            channels: 2,
            noise: {
                type: 'gaussian',
                mean: 256, 
                sigma: 120
            }
        }
    }).toFile('./outputs/noise.png')
    
    res.send('ok')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})
