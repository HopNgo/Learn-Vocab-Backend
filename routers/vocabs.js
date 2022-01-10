import express from "express";
const router = express.Router();
import { getVocabs, postVocab, updateVocab, deleteVocab } from '../controllers/vocabs.js';

router.get('/api/getVocabs', getVocabs);

router.post('/api/postVocab', postVocab);

router.post('/api/updateVocab', updateVocab);

router.post('/api/deleteVocab', deleteVocab);


export default router;