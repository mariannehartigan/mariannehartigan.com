import express from "express";

import {
  showMoods
} from "../controllers/mood.js";

const router = express.Router();

router.get("/moods", showMoods);

export default router;
