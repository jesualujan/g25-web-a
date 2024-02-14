import { createRouter } from 'next-connect'
import db from '../../../utils/db'
import User from '../../../models/Users'
import bcrypt from 'bcryptjs'
import {signToken} from '../../../utils/auth'


const router = createRouter();

router
  .post(async (req, res) => { 
    await db.connect()
  const user = await User.findOne({email: req.body.email})
    await db.disconnect()
    // vamos a ver lo que el usuario nos retorna
    if(user && bcrypt.compareSync(req.body.password, user.password)){
        const token = signToken(user)
        res.send({ 
            token,
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else {
        res.status(401).send({message: 'Invalid email or password'})
    }
  })


export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
  onNoMatch: (req,res) => {
    res.status(404).end('Page is not found');
  }
});