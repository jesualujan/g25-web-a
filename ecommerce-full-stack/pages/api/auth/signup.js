import User from '../../../models/Users'
import db from '../../../utils/db'
import { hashPassword } from '../../../utils/auth'

async function handler(req,res){
    if(req.method !== 'POST'){
        return
    }

    const data = req.body
    const { name, email, password } = data

    if( !email || !email.includes('@') || !password || password.trim().lenght < 7 ){
        rest.status(422).json({
            message: 'Invalid input'
        })
        return
    }
    await db.connect()

    //checar si el usuario existe
    const existingUser = await User.findOne({email})
    if(existingUser){
        res.status(422).json({
            message: 'User exists already!'
        })
        db.disconnect()
        return
    }

    // crear usuario
    const hashedPassword = await hashPassword(password)
    const result = await User.create({
        name: name,
        email: email,
        password: hashedPassword
    })
    res.status(201).json({message: 'User created!'})
    db.disconnect()
}

export default handler