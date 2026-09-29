const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/machines', require('./routes/machineRoutes'));
app.use('/api/reports', require('./routes/reportRoutes'));
app.use('/health', require('./routes/healthRoutes'));

app.use(require('./middlewares/notFound'));
app.use(require('./middlewares/errorHandler'));

module.exports = app;