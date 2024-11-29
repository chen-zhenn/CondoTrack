const mongoose = require('mongoose')

const ResidentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Deve fornecer um nome'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Deve fornecer um email'],
      validate: {},
    },
    phone: {
      type: String,
      required: [true, 'Deve fornecer um telefone'],
      validate: {},
    },
    unitId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Residents', ResidentSchema)
