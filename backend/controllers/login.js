import logings from "../models/loginModel.js";


export const getAllLogings = async(req,res) => {
    try{
        const login = await logings.findAll();
        res.json(login);
    }catch(error){
        res.json({ message: error.message });
    }
}


export const createLogings = async (req, res) => {
    try {
        await logings.create(req.body);
        res.json({
            "message": "User Loged in"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}