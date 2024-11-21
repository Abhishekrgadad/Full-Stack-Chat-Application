import express from 'express'
import { signup,login,logout } from '../controllers/auth.controllers.js';

const router = express.Router();

router.get('/login',login);
//Since each route have too many lines of code to configuration in order to avoid this use Controllers to define each route separately.

router.get('/signup',signup);

router.get('/logout',logout);





export default router;