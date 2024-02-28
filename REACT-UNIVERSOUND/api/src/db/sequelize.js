const { Sequelize, DataTypes } = require('sequelize')
const SongModel = require('../models/song')
const UserModel = require('../models/user')
const songs = require('./mock-song')
const bcrypt = require('bcrypt');


const sequelize = new Sequelize('universoundDB', 'universound', 'universoundHolberton', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
  }
)

const Song = SongModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

const initDB = () => {
  return sequelize.sync({force: true})
  .then(_ => {
    songs.map(song => {
    Song.create({
      audioSrc: song.audioSrc,
      metadata: {
        album: song.metadata.album,
        artist: song.metadata.artist,
        coverArtSrc: song.metadata.coverArtSrc,
        types: song.metadata.types,
        title: song.metadata.title,
        },
    }).then(Bazock => console.log(Bazock.toJSON()))
    })


    bcrypt.hash('amazinger', 10)
    .then(hashedPassword => {
        User.create({
            lastname: 'cremey',
            firstname: 'erwan',
            username: 'amazinger',
            password: hashedPassword,
            mail: 'cremey.erwan@gmail.com',
        })
        .then(user => console.log(user.toJSON()))
        .catch(error => console.error('Erreur lors de la création de l\'utilisateur :', error));
    })
    .catch(error => console.error('Erreur lors du hachage du mot de passe :', error));

    console.log('La base de données universoundDB est synchronisée.')
  })
}

module.exports = { initDB, Song, User }
