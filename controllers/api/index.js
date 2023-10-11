const router = require('express').Router();
const userRoutes = require('./userRoutes');
const calorieRoutes = require('./calorieRoutes');

router.use('/users', userRoutes);
router.use('/calorie', calorieRoutes);

module.exports = router;
