import axios from "axios";

const { createContext, useState } = require("react");

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [username, setUsername] = useState(null)

   async function login(credenciais){
     const resp = await axios.get("http://localhost:3000/usuarios")
     const usuarios = resp.data
     const usuario = usuarios.find(u => u.email === credenciais.email)
     if (usuario?.senha === credenciais.senha){
        setUsername(usuario.nome)
        return true
     }
     return false
   }

    return (
        <AuthContext.Provider value={{username, login}}>
            {children}
        </AuthContext.Provider>
    )
}