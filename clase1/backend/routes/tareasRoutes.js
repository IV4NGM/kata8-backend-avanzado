const express = require('express')
const router = express.Router()
const { getTareas, createTareas, updateTareas, deleteTareas } = require('../controllers/tareasControllers')

router.get('/', getTareas)
router.post('/', createTareas)

// La siguiente línea equivale a las dos anteriores:
// router.route('/').get(getTareas).post(createTareas)

router.put('/:id', updateTareas)
router.delete('/:id', deleteTareas)
// router.route('/:id').put(updateTareas).delete(deleteTareas)

module.exports = router
