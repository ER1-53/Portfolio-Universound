const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')

module.exports = (req, res, next) => {
  // Check for authorization header
  const authorizationHeader = req.headers.authorization

  if(!authorizationHeader) {
    const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requète`
    return res.status(401).json({ message })
  }

  // Extract and verify token
  const token = authorizationHeader.split(' ')[1]
  const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {
  if(error) {
    const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`
    return res.status(401).json({ message, data: error})
  }

  // Check user ID in request body
  const userId = decodedToken.userId
  if(req.body.userId && req.body.userId !== userId) {
    const message = `L'identifiant de l'utilisateur est invalide.`
    res.status(401).json({ message })
  } else {
    // Allow access to resource
    next()
  }
  })
}
