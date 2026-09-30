require('dotenv').config();

const requiredEnvVars = [
  'PORT',
  'MONGO_URI',
  'JWT_SECRET',
  'JWT_EXPIRES_IN',
  'DEFAULT_ADMIN_EMAIL',
  'DEFAULT_ADMIN_PASSWORD',
];

function checkEnv() {
  const missing = requiredEnvVars.filter((key) => !process.env[key]);

  
  if (missing.length > 0) {
    console.error(`Variables d'environnement manquantes: ${missing.join(', ')}`);
    process.exit(1);
  }
}

module.exports = checkEnv;