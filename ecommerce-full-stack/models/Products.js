import mongoose from 'mongoose'

const productSchema = new mongoose.Schema (
    {
    id: {type: String, required: true, unique: true },
    title: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
   },
   { timestamps: true } // sirve para saber cuando un producto (dato) fue creado
)

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
export default Product