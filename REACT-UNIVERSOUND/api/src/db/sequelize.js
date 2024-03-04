const { Sequelize, DataTypes } = require('sequelize')
const SongModel = require('../models/song')
const UserModel = require('../models/user')
const songsData = require('./mock-song')
const usersData = require('./mock-user')


let sequelize

if(process.env.NODE_ENV === 'production'){
  sequelize = new Sequelize('universoundDB', 'universound', 'universoundHolberton', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
  })
} else {
  sequelize = new Sequelize('universoundDB', 'universound', 'universoundHolberton', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  })
}

const Song = SongModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

const initDB = async () => {

  await sequelize.sync();

  const count = await Song.count();
  const countUser = await User.count();
  if(count === 0 && countUser === 0) {
    songsData.map(songData => {
      Song.create({
        audioSrc: songData.audioSrc,
        metadata: {
          album: songData.metadata.album,
          artist: songData.metadata.artist,
          coverArtSrc: songData.metadata.coverArtSrc,
          types: songData.metadata.types,
          title: songData.metadata.title,
          },
      })
      .then(song => console.log(song.toJSON()))
      .catch(error => console.error(error));
    });

    usersData.map(userData => {
        User.create({
            lastname: userData.lastname,
            firstname: userData.firstname,
            username: userData.username,
            password: userData.password,
            mail: userData.mail,
            resetPasswordToken: userData.resetPasswordToken,
            resetPasswordExpires: userData.resetPasswordExpires,
        })
        .then(user => console.log(user.toJSON()))
        .catch(error => console.error('Erreur lors de la création de l\'utilisateur :', error));
    });
    } else {
      console.log('La base de données universoundDB est synchronisée.')
      console.log(`Base de données déjà remplie.`)
    }
}

module.exports = { initDB, Song, User }
