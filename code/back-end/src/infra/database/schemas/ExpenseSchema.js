const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, 'Deve fornecer valor de despesa'],
    },
    date: {
      type: Date,
      required: [true, 'Deve fornecer data de despesa'],
    },
    description: {
      type: String,
      required: [true, 'Deve fornecer descrição da despesa'],
    },
    type: {
      type: String,
      required: [true, 'Deve fornecer o tipo de despesa'],
      enum: ['fixa', 'variável'],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Expenses', expenseSchema)
