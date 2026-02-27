import React, { createContext, ReactNode } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}

// Criamos uma interface para as PROPS do componente Provider
interface IUsuarioLogadoProviderProps {
    children: ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>(
    {} as IUsuarioLogadoContextData
);

// Aqui passamos a interface para o React.FC<...>
export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: "Lucas" }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
};