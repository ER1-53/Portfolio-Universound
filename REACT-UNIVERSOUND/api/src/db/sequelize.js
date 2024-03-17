const { Sequelize, DataTypes } = require('sequelize')
const LikeModel = require('../models/like')
const HistoricModel = require('../models/historic')
const SongModel = require('../models/song')
const UserModel = require('../models/user')
const likesData = require('./mock-like')
const historicData = require('./mock-historic')
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
const Historic = HistoricModel(sequelize, DataTypes)
const Like = LikeModel(sequelize, DataTypes)

User.belongsToMany(Song, { through: Historic, foreignKey: 'UserId' });
Song.belongsToMany(User, { through: Historic, foreignKey: 'SongId' });

User.belongsToMany(Song, { through: Like, foreignKey: 'UserId' });
Song.belongsToMany(User, { through: Like, foreignKey: 'SongId' });

const initDB = async () => {

  await sequelize.sync();

  const count = await Song.count();
  const countUser = await User.count();

  if(count === 0 && countUser === 0) {
    await Promise.all(songsData.map(songData => {
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
    }));

    await Promise.all(usersData.map(async userData => {
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
      .then(user => console.log(user.toJSON()))
      .catch(error => console.error('Erreur lors de la création de l\'utilisateur :', error));
    }));

    historicData.map(historicData => {
      Historic.create ({
        UserId: historicData.UserId,
        SongId: historicData.SongId,
        listenedAt: historicData.listenedAt,
      })
      .then(historic => console.log(historic.toJSON()))
      .catch(error => console.error('Erreur lors de la création de Historic', error))
      });

      likesData.map(likesData => {
        Like.create ({
          UserId: likesData.UserId,
          SongId: likesData.SongId,
          listenedAt: likesData.listenedAt,
        })
        .then(historic => console.log(historic.toJSON()))
        .catch(error => console.error('Erreur lors de la création de Historic', error))
        });

    } else {
      console.log('La base de données universoundDB est synchronisée.')
      console.log(`Base de données déjà remplie.`)
    }
}

module.exports = { initDB, Song, User, Historic, Like}
