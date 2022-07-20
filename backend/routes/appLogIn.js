import express from "express"; 
import{
    getAllLogings,
    createLogings,
    
}from "../controllers/login.js"
const router = express.Router();

router.get('/', getAllLogings);

router.post('/', createLogings);

 
export default router;
 