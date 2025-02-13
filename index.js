
const express = require('express')
const path = require('node:path')
const app = express()  // create our app

require('dotenv').config()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// allows us to parse the body of the req
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000

// MODEL
const colours = [
    { name: 'red', count: 0 },
    { name: 'blue', count: 0 },
    { name: 'green', count: 0 },
    { name: 'orange', count: 0 },
    { name: 'yellow', count: 0 }
]

app.get('/', (req, res) => {
    res.render('index', {title: "Favourite Colour", colours})
})

app.post('/', (req, res) => {
    const favouriteColour = req.body['fav-colour']

    colours.map(colour => {
        if (colour.name === favouriteColour) {
            colour.count++
        }
    })
    
    console.log(colours)
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
