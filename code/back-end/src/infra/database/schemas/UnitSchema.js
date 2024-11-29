const mongoose = require('mongoose')

const unitSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    code: {
      type: String,
      required: [true, 'Deve fornecer o número/código da unidade'],
    },
    type: {
      type: String,
      required: [true, 'Deve fornecer o tipo da unidade'],
      enum: ['bloco', 'torre', 'loft'],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Units', unitSchema)
