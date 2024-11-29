const mongoose = require('mongoose')

const PaymentSchema = mongoose.Schema(
  {
    expenseId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date: {
      type: Date,
      required: [true, 'Deve fornecer data de pagamento'],
    },
    amount: {
      type: Number,
      required: [true, 'Deve fornecer valor de pagamento'],
      min: [0, 'Deve ser um valor positivo'],
    },
    status: {
      type: String,
      required: [true, 'Deve fornecer o status de pagamento'],
      enum: ['pago', 'pendente'],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Payments', PaymentSchema)
