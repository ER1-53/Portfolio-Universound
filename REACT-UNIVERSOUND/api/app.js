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

app.use(({res}) => {
  const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
  res.status(404).json({message})
})

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});


/* app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/songs', (req, res) => {
  const message = 'Toutes les musiques ont été récupérés.'
  res.send(success(message, songs))
})

app.get('/api/songs/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const song = songs.find(song => song.id === id)
  const message = 'Cette musique existe.'
  res.json(success(message, song))
})

app.post('/api/songs', (req, res) => {
  const id = getUniqueId(songs);
  const songCreated = { ...req.body, ...{id: id, created: new Date()}}
  songs.push(songCreated)
  const message = `la musiqueCreated.title} a bien été crée.`
  res.json(success(message, songCreated))
})

app.put('/api/songs/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const songUpdate = { ...req.body, id: id}
  songs = songs.map(song => {
    return song.id === id ? songUpdate : song
  })
  const message = `La musique ${songUpdate} a bien été modifié.`
  res.json(success(message, songUpdate))
})

app.delete('/api/songs/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const songDeleted = songs.find(song => song.id === id)
  songs = songs.filter(song => song.id !== id)
  const message = `La musique ${songDeleted.metadata.title} a été supprimer.`
  res.json(success(message, songDeleted))
}) */

