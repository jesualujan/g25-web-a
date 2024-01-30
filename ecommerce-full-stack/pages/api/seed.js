import { createRouter } from 'next-connect'
import db from '../../utils/db'
import  { data } from '../../utils/data'

const router = createRouter()

router
  .get((req, res) => {
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