import mongoose from 'mongoose'

const userSchema = new mongoose.Schema (
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, required:false, default: true},
       },
       { timestamps: true } // sirve para saber cuando un producto (dato) fue creado
)

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User