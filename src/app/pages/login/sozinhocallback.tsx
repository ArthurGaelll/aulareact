import { useCallback, useState } from "react";
export const Callback = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
        
    const clickBotao = useCallback(() => {
           console.log(email);
           console.log(senha);
    },[email,senha]) 
    
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