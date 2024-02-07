const express = require('express')
const router = express.Router()
const { getTareas, createTareas, updateTareas, deleteTareas } = require('../controllers/tareasControllers')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getTareas)
router.post('/', protect, createTareas)

// La siguiente línea equivale a las dos anteriores:
// router.route('/').get(protect, getTareas).post(protect, createTareas)

router.put('/:id', protect, updateTareas)
router.delete('/:id', protect, deleteTareas)
// router.route('/:id').put(protect, updateTareas).delete(protect, deleteTareas)

module.exports = router
