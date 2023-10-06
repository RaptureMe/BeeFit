const router = require('express').Router();
const { CalorieInput } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newCalorieInput = await CalorieInput.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCalorieInput);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const CalorieInputData = await CalorieInput.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!CalorieInputData) {
      res.status(404).json({ message: 'No CalorieInput found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
