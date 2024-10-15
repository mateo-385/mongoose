import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
})

export const Employees = mongoose.model('Employees', employeeSchema)
