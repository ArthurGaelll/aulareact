import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";

export const Login = () => { 
  const inputsenharef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const emailLength = useMemo(() => {
    console.log("Executou o cálculo do Memo");
    return email.length * 1000;
  }, [email.length]);

  const handleClick = useCallback(() => {
    console.log("Email:", email);
    console.log("Senha:", senha);

    if (inputsenharef.current !== null){
        inputsenharef.current.focus() 
    }
  }, [email, senha]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {email.length}</p>
        
        <InputLogin 
        label= "Email"
        value= {email}
        onChange= {newValue => setEmail(newValue)}
        />

        <InputLogin 
        label= "Senha"
        value= {senha}
        ref={inputsenharef}
        type="password"
        onChange= {newValue => setSenha(newValue)}
        />
        
        

        {/* <label>
          <span>Senha</span>
          
          <input 
            type="password" 
            ref = {inputsenharef}
            value={senha} 
            onChange={e => setSenha(e.target.value)} 
          />
        </label> */}

        <button type="button" onClick={handleClick}>
          Entrar
        </button>
      </form>
    </div>
  );
};