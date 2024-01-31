const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
  descripcion: {
    type: String,
    required: [true, 'Por favor teclea una descripción']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)
