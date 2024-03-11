import mongoose, { Schema } from 'mongoose'

const registerSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    likes: { type: Array },
    cart: { type: Array }
},
    { timestamps: true });

export const registerInfo = mongoose.models.registerInfo || mongoose.model('registerInfo', registerSchema);
