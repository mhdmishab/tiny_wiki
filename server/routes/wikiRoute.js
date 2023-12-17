import { Router } from "express";
import { ReadSlug, SearchTerm, mostSerachedKeyword } from "../controllers/wikiController.js";

const route=Router();

route.get('/search/:searchTerm',SearchTerm)
route.get('/read/:slug',ReadSlug)
route.get('/most-searched/:order(asc|desc)',mostSerachedKeyword)

export default route;