import { useEffect, useState } from "react";

export const Effect = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    useEffect( () => {
        console.log(email);
    },[email]);

    useEffect( () => {
        console.log(senha);
    },[senha]);
    
       const clickBotao = () => {
        console.log(email);
        console.log(senha);
       }
    
        return(
        <div>
            <label>
                <span>Email</span>
                <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </label>
    
            <label>
                <span>Senha</span>
                <input 
                value={senha}
                type="password"
                onChange={e => setSenha(e.target.value)}
                />
            </label>
    
            <button type="button" onClick={clickBotao}>Entrar</button>
        </div>
        );
}