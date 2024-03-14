const { Sequelize, DataTypes } = require('sequelize')
const SongModel = require('../models/song')
const UserModel = require('../models/user')
const songsData = require('./mock-song')
const usersData = require('./mock-user')
const bcrypt = require('bcrypt')


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

const HistoricListening = sequelize.define('HitoricListening', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  timestamps: false,
})

User.belongsToMany(Song, { through: HistoricListening, foreignKey: 'UserId' })
Song.belongsToMany(User, { through: HistoricListening, foreignKey: 'SongId' })

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

    usersData.map(async userData => {
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      User.create({
          lastname: userData.lastname,
          firstname: userData.firstname,
          username: userData.username,
          password: hashedPassword,
          mail: userData.mail,
          resetPasswordToken: userData.resetPasswordToken,
          resetPasswordExpires: userData.resetPasswordExpires,
      })
      .then(user => {
        // Ajouter des musiques à l'utilisateur après sa création
        user.addSongs(songsData.slice(0, 3))
        .then(() => console.log(`${user.firstname} ${user.lastname} a été créé avec les musiques${songsData.slice(0, 3).map(song => song.metadata.title).join(', ')}`))
        .catch(error => console.error('Erreur lors de l\'ajout des musiques à l\'utilisateur :', error));
      })
      .catch(error => console.error('Erreur lors de la création de l\'utilisateur :', error));
    });
    } else {
      console.log('La base de données universoundDB est synchronisée.')
      console.log(`Base de données déjà remplie.`)
    }
}

module.exports = { initDB, Song, User }
