import { createRouter } from 'next-connect'
import db from '../../utils/db'
import  { data } from '../../utils/data'
import Product from '../../models/Product'

const router = createRouter()

router
  .get(async (req, res) => {
     //? MONGOOSE FUNCTIONS 
     await db.connect()
     await Product.deleteMany()
     await Product.insertMany(data.products)
     await db.disconnect()
    res.send('IT WORKS')
  })

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
  onNoMatch: (req,res) =>{
    res.status(404).end('Page in not found')
  }
});