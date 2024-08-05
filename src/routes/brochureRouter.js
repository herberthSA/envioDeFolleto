import express from 'express';
import brochureController from '../controllers/brochureController.js';
const routerBrochures = express.Router();


routerBrochures.post('/brouchure',brochureController.sendEmail);

export default routerBrochures;