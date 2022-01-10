import mongoose from "mongoose";

const schema = new mongoose.Schema({
    en: { type: String, require: true },
    vn: { type: String, require: true },
})

export const vocabsModel = mongoose.model('vocabs', schema);