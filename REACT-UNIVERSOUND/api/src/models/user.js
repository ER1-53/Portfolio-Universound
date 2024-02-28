module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Cette utilisateur existe déjà.'
      },
    },
    password: {
      type: DataTypes.STRING
    },
    mail: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Ce mail est déjà utilisé.'
      },
    }
  })
}
