import mongoose, { Schema } from 'mongoose'

const watchSchema = new Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    collection: { type: String, required: true },
    url: { type: String, required: true },
    price: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
},
    { timestamps: true },
    { suppressReservedKeysWarning: true });

export const WatchModal = mongoose.models.watches || mongoose.model('watches', watchSchema);
