import { Router } from "express";
import { adminDashboard, adminLogin, mostSerachedKeyword } from "../controllers/adminController.js";
import { isAuthenticated, verifyRefreshToken } from "../middleware/authorization.js";

const adminRoute=Router();

adminRoute.post('/login/:key',adminLogin);
adminRoute.get('/dashboard',isAuthenticated,adminDashboard);
adminRoute.post('/refresh',verifyRefreshToken);
adminRoute.get('/most-searched/:order(asc|desc)',mostSerachedKeyword)

export default adminRoute;