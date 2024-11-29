const mongoose = require('mongoose')

const CostSharingSchema = mongoose.Schema(
  {
    unitId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    expenseId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, 'Deve fornecer valor de rateio'],
      min: [0, 'Deve ser um valor positivo'],
    },
    faction: {
      type: Number,
      default: 1,
      required: [true, 'Deve fornecer percentual de rateio'],
      min: [0, 'Deve ser um valor positivo'],
      max: [1, 'Deve ser no máximo 1'],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('CostSharings', CostSharingSchema)
