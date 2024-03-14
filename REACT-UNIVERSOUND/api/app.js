const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 4001;

app
.use(favicon(__dirname + '/favicon.ico'))
.use(bodyParser.json())
.use(cors())

sequelize.initDB()

require('./src/routes/findAllSongs')(app)
require('./src/routes/findSongByPk')(app)
require('./src/routes/createSong')(app)
require('./src/routes/updateSong')(app)
require('./src/routes/deleteSong')(app)
require('./src/routes/login')(app)
require('./src/routes/createUser')(app)
require('./src/routes/deleteUser')(app)
require('./src/routes/HaskforNewPassword')(app)
require('./src/routes/updatePassword')(app)
require('./src/routes/finUserByMail')(app)
require('./src/routes/userAddSong')(app)
require('./src/routes/findUserSongs')(app)

app.use(({res}) => {
  const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
  res.status(404).json({message})
})

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});

