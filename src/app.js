// LIBRARY
const express = require('express');
const app = express();

//ROUTES
const testRoutes = require('./routes/testRoutes');
// const healthRoutes = require('./routes/healthRoutes');
const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
// const machineRoutes = require('./routes/machineRoutes');
// const reportRoutes = require('./routes/reportRoutes');

// MIDDLEWARE
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/errorMiddleware')

// USAGE
app.use(express.json());
app.use('/api/test', testRoutes );
app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/machines', machineRoutes);
// app.use('/api/reports', reportRoutes);
// app.use('/health', healthRoutes);
app.use(notFound);
app.use(errorMiddleware);

module.exports = app;