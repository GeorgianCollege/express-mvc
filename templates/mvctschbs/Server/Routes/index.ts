import express from 'express';
const router = express.Router();

// import functions from the index controller
import { DisplayHome } from '../Controllers/index';

/* GET Default Route */
router.get('/', (req, res, next)=>
{
    DisplayHome(req, res, next);
});

/* GET Home Page */
router.get('/home', (req, res, next)=>
{
    DisplayHome(req, res, next);
});

export default router;
