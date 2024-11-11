
import { Router } from "express";


import {postRegistration, postLogin} from "../controllers/userController.js";


const router = Router();

router.post("/register",postRegistration);

router.post("/login",postLogin);



export default router;