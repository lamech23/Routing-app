import express from "express"; 
import{
    getAllUsers,
    createUsers,
    // getUsersById,
    // // updateUsers,
    // deleteUsers
}from "../controllers/user.js"
const router = express.Router();

router.get('/', getAllUsers);
// router.get('/:id', getUsersById);
router.post('/', createUsers);
// router.patch('/:id', updateUsers);
// router.delete('/:id', deleteUsers);
 
export default router;
 
