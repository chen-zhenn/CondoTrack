const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    residentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Deve fornecer um email'],
      validate: {},
    },
    password: {
      type: String,
      required: [true, 'Deve fornecer uma senha'],
      minLength: [8, 'Deve ter pelo menos 8 caracteres.'],
      validate: {},
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Users', UserSchema)
