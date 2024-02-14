import {NextAuth} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth ({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Ecommerce',
            credentials: {},

            async authorize(credentials) {
                    // conexión directa a la base de datos
                const authResponse = await fetch("http://localhost:3000/api/users/login", {
                  method: 'POST',
                  headers: { 
                    "Content-Type": "application/json" ,
                      },
                  body: JSON.stringify(credentials),
                })
                    if(!authResponse.ok){
                        return null
                    }
                const user = await authResponse.json()
                return user
                },
            }),
        ],

        secret: process.env.JWT_SECRET,
        pages: {
            signIn: "/login",
        },
        // determina que pasamos a la sesión
        // next solo retorna un correo electrónico
        callbacks: {
            jwt: async ({token, user}) => {
                user && (token.user = user)
                return token
            },
            session: async ({session, token}) => {
                session.user = token.user
                return sesion
            }
        },

        debug: process.env.NODE_ENV === "development",
    })