
const router = require('express').Router();
const { User, CalorieInput } = require('../../models');

router.post('/', async (req, res) => {
  try {
    req.body.user_id = req.session.user_id;
    const calorieData = await CalorieInput.create(req.body);
    res.status(200).json(calorieData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const calorieData = await CalorieInput.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(calorieData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
