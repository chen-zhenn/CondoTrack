const mongoose = require('mongoose')
const { ExpenseSchema, UnitSchema } = require('./index')

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
      type: [UnitSchema],
      required: true,
    },
    expenses: {
      type: [ExpenseSchema],
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Buildings', BuildingSchema)
