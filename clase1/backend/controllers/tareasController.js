const getTareas = (req, res) => {
  res.status(200).json({ mensaje: 'Get Tareas' })
}

const createTareas = (req, res) => {
  res.status(201).json({ mensaje: 'Create tareas' })
}

const updateTareas = (req, res) => {
  res.status(200).json({ mensaje: `Modificar la tarea con id ${req.params.id}` })
}

const deleteTareas = (req, res) => {
  res.status(200).json({ id: req.params.id })
}

module.exports = {
  getTareas,
  createTareas,
  updateTareas,
  deleteTareas
}
