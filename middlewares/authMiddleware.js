// middleware/authMiddleware.js

const jwt = require("jsonwebtoken");
//On importe le modèle User qui permet d’interagir avec la base de données des utilisateurs.
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  //On déclare une variable token pour stocker le token JWT extrait de la requête.
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //On récupère le token en coupant le header "Bearer <token>" en deux, et on prend la deuxième partie qui est le token lui-même.
      token = req.headers.authorization.split(" ")[1];
      //On utilise jwt.verify pour vérifier que le token est valide et non expiré 
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //Avec l’id extrait du token, on va chercher dans la base de données l’utilisateur correspondant.
      req.user = await User.findById(decoded.id).select("-password");
      //On ajoute l’utilisateur trouvé à la requête dans req.user, pour qu’il soit accessible aux middlewares/routes suivants.

//On appelle next() pour indiquer que ce middleware est terminé et qu’il faut passer à la suite (prochaine fonction dans la chaîne de middlewares/routes).
      next();
    } catch (error) {
      return res.status(401).json({ message: "Non autorisé" });
    }
  } else {
    return res.status(401).json({ message: "Pas de token" });
  }
};
