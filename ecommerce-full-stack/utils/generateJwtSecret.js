// Crypto en nodejs proporciona funciones para cifrar y descifrar datos.
// hash, firma y verificación.
// sirve para crear firmas digitales y autenticación de usuarios.

const crypto = require('crypto')
// Esta linea de código es comunmente para generar claves secretas 
// tokens de acceso o cualquier otro dato aleatorio que requiera una clave y seguridad criptográfica
const secret = crypto.randomBytes(64).toString('hex')
console.log(secret)