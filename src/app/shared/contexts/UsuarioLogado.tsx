import React, { createContext, ReactNode, use, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}


interface IUsuarioLogadoProviderProps {
    children: ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);


export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

    const [nome,setNome] = useState("");


    useEffect(() => {
        setTimeout(() => {
           setNome("Gael")
        }, 300)
    })

    const handlelogout = useCallback(() => {
         console.log ("Logout Executou");
    },[]) 



    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome , logout:handlelogout  }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
};