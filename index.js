const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const projectRoutes = require('./routes/project');
const timesheetRoutes = require('./routes/timesheet');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

// Test database connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Define model relationships
const User = require('./models/User');
const Project = require('./models/Project');
const Timesheet = require('./models/Timesheet');

User.belongsToMany(Project, { through: 'UserProjects' });
Project.belongsToMany(User, { through: 'UserProjects' });
Timesheet.belongsTo(User);
Timesheet.belongsTo(Project);
User.hasMany(Timesheet);
Project.hasMany(Timesheet);

// Synchronize database
sequelize.sync({ force: true })
  .then(() => console.log('Database synced...'))
  .catch(err => console.log('Error: ' + err));

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/user', authenticateToken, userRoutes);
app.use('/api/project', authenticateToken, projectRoutes);
app.use('/api/timesheet', authenticateToken, timesheetRoutes);

// Test route
app.get('/', (req, res) => res.send('API is running...'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
