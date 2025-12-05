import User from "../Model/userModel.js"

export const create = async(req, res) => {
    try {

        const {name, email, address } = req.body
        if(!name || !email || !address){
            return res.status(400).json({
                message: 'all fields are required'
            })
        }
        
        const userExist = await User.findOne({ email })
        if(userExist){
            return res.status(400).json({
                message: 'user with this email already exsist'
            })
        }
        const newUser = new User({name, email, address})
        const saveData = newUser.save();
        
        res.status(200).json({
            saveData,
            success: true,
            message: 'user created successfully',            
        })

    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}

export const getAllUsers = async(req, res)=> {
    try {
        const usersData = await User.find();
        if(!usersData || usersData.length===0){
            return res.status(404).json({message: 'users data not found'})
        }
        res.status(200).json({usersData})
    } catch (error) {
        req.status(500).json({errorMessage: error.message})
    }
}

export const getUserById = async(req, res)=>{
    try {
        const id = req.params.id
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({message: 'user not exsist'})
        }
        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}

export const updateById = async(req, res)=> {
    try {
        const id = req.params.id

        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(400).json({message: 'user not exsist'})
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, {
            new: true
        })
        // res.status(200).json({updatedData})
            res.status(200).json({
            success: true,
            message: 'user updated successfully',
            
            
        })
    } catch (error) {
     res.status(500).json({errorMessage: error.message})   
    }
}

export const deleteById = async(req, res) => {
    try {
        
        const id = req.params.id
        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(400).json({message: 'invaild user id'})
        }
         await User.findByIdAndDelete(id)
        res.status(200).json({message: 'user deleted successfully!'})
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}