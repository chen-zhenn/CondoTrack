const mongoose = require('mongoose')
const unitSchema = require('./ExpenseSchema')
const expenseSchema = require('./ExpenseSchema')

const BuildingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Deve fornecer o nome do condomínio'],
    },
    address: {
      type: String,
      required: [true, 'Deve fornecer o endereço do condomínio'],
    },
    units: {
      type: [unitSchema],
      required: true,
    },
    expenses: {
      type: [expenseSchema],
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Buildings', BuildingSchema)
