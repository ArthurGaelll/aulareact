import { useMemo, useState } from "react";
export const Memo = () =>{
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
       const clickBotao = () => {
            console.log(email);
            console.log(senha);
       }
       
       const emaillen = useMemo(() => {
            return email.length * 2;
       },[email.length]) 

    
        return(
        <div>
            <h1>LETRAS X2 DO EMAIL {emaillen} </h1>
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