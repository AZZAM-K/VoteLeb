import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, index: true },
    fullName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    profilePicture: {
      public_id: { type: String, default: '' },
      url: { type: String, default: '' },
    },

    bio: { type: String, default: '' },
    gender: { type: String, enum: ['male', 'female'], required: true },
    dateOfBirth: { type: Date, required: true },

    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],

    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Story' }],
    closeFriends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    isOnline: { type: Boolean, default: false },
    lastSeen: { type: Date },

    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    isPrivate: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const User = mongoose.model('User', UserSchema)
export default User
