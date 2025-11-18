import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema(
  {
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
      required: true,
      index: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: ['text', 'image', 'video'],
      default: 'text',
    },
    text: { type: String, default: '' },
    media: {
      url: { type: String },
      public_id: { type: String },
    },
    replyTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
    edited: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Message = mongoose.model('Message', MessageSchema)
export default Message
