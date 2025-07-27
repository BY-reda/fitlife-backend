
const bcrypt = require('bcryptjs');

async function generateHash(password) {
  const hashed = await bcrypt.hash(password, 10);
  console.log('Hashed password:', hashed);
}

generateHash('admin'); // Replace 'yourAdminPassword' with your actual admin password
