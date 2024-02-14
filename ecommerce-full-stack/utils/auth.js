import jwt from 'jsonwebtoken'
import {hash} from 'bcryptjs'

//Encriptar password
export const hashPassword = async (password) => {
    if(password.length < 8) {
        throw new Error('Password must be at least 8 characters')
    }
    return await hash(password, 12)
 }

 export const signToken = (user) => {
    return jwt.sign({ 
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    },
        process.env.JWT_SECRET, //secret key
    )
 }