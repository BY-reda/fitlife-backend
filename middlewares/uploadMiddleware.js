const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Crée le dossier uploads s'il n'existe pas
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configuration du stockage
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },
  filename(req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = file.originalname.split(ext)[0].replace(/\s+/g, '-');
    cb(null, `${name}-${Date.now()}${ext}`);
  }
});

// Filtre : accepter uniquement les images
const fileFilter = (req, file, cb) => {
  const types = /jpeg|jpg|png|gif|webp/;
  const ext = types.test(path.extname(file.originalname).toLowerCase());
  const mime = types.test(file.mimetype);
  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});

module.exports = upload;
