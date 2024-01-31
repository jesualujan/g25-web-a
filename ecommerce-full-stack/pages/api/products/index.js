import { createRouter } from 'next-connect'
import db from '../../../utils/db'
import Product from '../../../models/Products';


const router = createRouter();

router
  .get(async (req, res) => {
    //? MONGOOSE FUNCTIONS 
    await db.connect()
   const products =  await Product.find({})
//    console.log(products)
    await db.disconnect(products)
    res.send(products)
    // res.send()
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