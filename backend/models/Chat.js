import mongoose from 'mongoose'

const ChatSchema = new mongoose.Schema(
  {
    participants: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ],

    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],

    isGroupChat: { type: Boolean, default: false },

    chatName: { type: String, default: '' },

    latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },

    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    chatPicture: {
      url: { type: String, default: '' },
      public_id: { type: String, default: '' },
    },
    description: { type: String, default: '' },
  },
  { timestamps: true }
)

const Chat = mongoose.model('Chat', ChatSchema)
export default Chat
