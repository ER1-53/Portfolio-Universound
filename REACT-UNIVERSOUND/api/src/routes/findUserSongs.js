const { User, Song } = require('../db/sequelize')
const auth = require('../auth/auth')


module.exports = (app) => {
  app.get('/api/users/:userId/songs', auth, async (req, res) => {
    const user = await User.findByPk(req.params.userId, {
      include: {
        model: Song,
        through: { attributes: [] }
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'L\'utilisateur n\'existe pas !' });
    }

    const songs = user.Songs;

    res.json({data: songs});
  });
}
