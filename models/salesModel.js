import mongoose from 'mongoose'

const saleSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products',
    required: true,
  },
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employees',
    required: true,
  },
  sale_date: {
    type: Date,
    default: Date.now,
  },
})

export const Sales = mongoose.model('Sales', saleSchema)
