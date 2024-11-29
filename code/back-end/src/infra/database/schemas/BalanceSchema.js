const mongoose = require('mongoose')

const BalanceSchema = mongoose.Schema(
  {
    buildingId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    totalExpenses: {
      type: Number,
      default: 0,
      required: true,
    },
    totalPayments: {
      type: Number,
      default: 0,
      required: true,
    },
    balance: {
      type: Number,
      default: 0,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Balance', BalanceSchema)
