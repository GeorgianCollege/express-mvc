import express from 'express';
const router = express.Router();

import { DisplayHome } from '../controllers/HomeController';


router.get('/', (req, res, next)=>
{
    DisplayHome(req, res, next);
});

export default router;
