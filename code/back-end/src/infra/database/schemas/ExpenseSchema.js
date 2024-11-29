const mongoose = require('mongoose')

const ExpenseSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, 'Deve fornecer valor de despesa'],
      min: [0, 'Deve ser um valor positivo'],
    },
    date: {
      type: Date,
      required: [true, 'Deve fornecer data de despesa'],
    },
    description: {
      type: String,
      required: [true, 'Deve fornecer descrição da despesa'],
      minLength: [20, 'Deve ter no mínimo 20 caracteres'],
      maxLength: [60, 'Deve ter no máximo 60 caracteres'],
    },
    type: {
      type: String,
      required: [true, 'Deve fornecer o tipo de despesa'],
      enum: ['fixa', 'variável'],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Expenses', ExpenseSchema)
