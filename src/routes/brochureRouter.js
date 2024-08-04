import express from 'express';
import brochureController from '../controllers/brochureController.js';
export const routerBrochures = express.Router();


routerBrochures.post('/brouchure',brochureController.sendEmail);