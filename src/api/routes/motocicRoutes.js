const express = require('express');
const router = express.Router();

const motocicControllers = require('../controllers/motocicControllers');

router.get('/motocicletas', motocicControllers.index);

router.post('/motocicletas', motocicControllers.store);

router.put('/motocicletas/:id', motocicControllers.update);

router.delete('/motocicletas/:id', motocicControllers.delete);

module.exports = router;