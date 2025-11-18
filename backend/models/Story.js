import mongoose from 'mongoose'

const StorySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    contentType: { type: String, enum: ['image', 'video'], default: 'image' },

    media: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },

    viewers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    viewsCount: { type: Number, default: 0 },

    expiresAt: { type: Date, required: true },

    isCloseFriends: { type: Boolean, default: false },
  },
  { timestamps: true }
)

StorySchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

const Story = mongoose.model('Story', StorySchema)
export default Story
