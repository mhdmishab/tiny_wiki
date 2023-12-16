import { Router } from "express";
import { adminLogin } from "../controllers/adminController.js";

const adminRoute=Router();

adminRoute.post('/login',adminLogin);

export default adminRoute;