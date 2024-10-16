// Importing express using ES modules syntax
import express from "express";
import cors from "cors";
import { handleUssd } from "../controllers/ussdController.js"; // Updated to use ES import

const router = express.Router();
router.use(cors());

// Handle USSD requests
router.post("/", handleUssd);
router.get("/", (req, res) => res.send("USSD is Online"));

// Exporting the router using ES modules syntax
export default router;
