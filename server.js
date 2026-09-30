require('dotenv').config();

// CHECKING ENV VALUES NOT EMPTY 
const checkEnv = require('./src/config/env')

// CALL ENV VERIFICATION FUNCTION 
checkEnv()

const app = require('./src/app');
const connectDB = require('./src/config/db');
const PORT = process.env.PORT || 3000;




connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});






