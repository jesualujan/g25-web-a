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

const db = { connect, disconnect }

export default db