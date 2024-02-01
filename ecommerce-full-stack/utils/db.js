import mongoose from 'mongoose'

const connection = {}

async function connect(){
    if(connection.isConnected){
        console.log('conexión exitosa')
        return
    }
    if(mongoose.connection.length > 0){
        connection.isConnected = mongoose.connections[0].readyState
        if(connection.isConnected === 1)
            console.log('usuario ya conectado')
        return
    }

    const db = await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log('nueva conexión')
    connection.isConnected = db.connections[0].readyState
}

async function disconnect(){
    if(connection.isConnected){
        if(process.env.NODE_ENV === 'production'){
            await mongoose.disconnect()
            connection.isConnected = false
        }else{
            console.log('conectado 💻')
        }
    }
}

function convertDocToObj(doc) {
    doc._id = doc._id.toString() // convierte el valor de la propiedad "_id" a una cadena o string
    doc.createdAt = doc.createdAt.toString() // convierte el valor de la propiedad "createdAt" a una cadena o string
    doc.updatedAt = doc.updatedAt.toString() // convierte el valor de la propiedad "updatedAt" a una cadena o string
    return doc // devuelve el objeto modificado
}

const db = { connect, disconnect, convertDocToObj }

export default db