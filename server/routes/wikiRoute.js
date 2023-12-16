import { Router } from "express";
import { ReadSlug, SearchTerm } from "../controllers/wikiController.js";

const route=Router();

route.get('/search/:searchTerm',SearchTerm)
route.get('/read/:slug',ReadSlug)

export default route;