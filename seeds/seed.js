const sequelize = require('../config/connection');
const { User, CalorieInput } = require('../models');

const userData = require('./userData.json');
const calorieinputData = require('./calorieinputData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const calorieinput of calorieinputData) {
    await CalorieInput.create({
      ...calorieinput,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
