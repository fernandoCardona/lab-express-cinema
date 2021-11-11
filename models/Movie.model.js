const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true, unique:true },
    director: { type: String }, 
    stars: [ String ], 
    image: { type: String},
    showtimes: [ String ],
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
