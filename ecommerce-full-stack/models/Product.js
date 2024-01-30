import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
    { 
        id: {type: String, required: true, unique: true},
        title: {type: String, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String, required: true},
    },
    { timestamps: true } // sirve para saber cuando un producto (dato) fue creado
)

const Products = mongoose.model.Products || mongoose.model('Products', productSchema)
export default Products