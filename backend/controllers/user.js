import user from "../models/usersModel.js";


export const getAllUsers = async(req,res) => {
    try{
        const users = await user.findAll();
        res.json(users);
    }catch(error){
        res.json({ message: error.message });
    }
}


export const createUsers = async (req, res) => {
    try {
        await user.create(req.body);
        res.json({
            "message": "Users Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
