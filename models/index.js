const User = require('./User');
const CalorieInput = require('./CalorieInput');

User.hasMany(CalorieInput, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

CalorieInput.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, CalorieInput };
