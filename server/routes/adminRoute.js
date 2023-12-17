import { Router } from "express";
import { adminDashboard, adminLogin } from "../controllers/adminController.js";
import { isAuthenticated, verifyRefreshToken } from "../middleware/authorization.js";

const adminRoute=Router();

adminRoute.post('/login',adminLogin);
adminRoute.get('/dashboard',isAuthenticated,adminDashboard);
adminRoute.post('/refresh',verifyRefreshToken)

export default adminRoute;