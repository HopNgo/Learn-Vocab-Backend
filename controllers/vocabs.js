import { vocabsModel } from "../models/vocabs.js";


export const getVocabs = async (req, res) => {
    try {
        const vocabs = await vocabsModel.find();
        console.log('vocabs', vocabs);
        res.status(200).json(vocabs);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const postVocab = async (req, res) => {
    try {
        const newVocab = req.body;
        const vocab = new vocabsModel(newVocab);
        await vocab.save();
        res.status(200).json(vocab);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateVocab = async (req, res) => {
    try {
        const newUpdateVocab = req.body;
        const vocab = await vocabsModel.findOneAndUpdate({ _id: newUpdateVocab._id }, newUpdateVocab, { new: true });
        res.status(200).json(vocab);

    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteVocab = async (req, res) => {
    try {
        const newDeleteVocab = req.body;
        const vocab = await vocabsModel.findOneAndDelete({ _id: newDeleteVocab._id });
        res.status(200).json(vocab);

    } catch (err) {
        res.status(500).json(err);
    }
}