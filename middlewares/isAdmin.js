// middleware/isAdmin.js
module.exports = function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    return next(); // Allow access
  }

  return res.status(403).json({ message: 'Access denied. Admins only.' });
};
