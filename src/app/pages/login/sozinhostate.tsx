import { useState } from "react";
import { Sozinhoinputlogin } from "./components/Sozinhoinputlogin";
import { Sozinhobotao } from "./components/Sozinhobotao";

export const  State = () =>  {
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");

   const clickBotao = () => {
    console.log(email);
    console.log(senha);
   }

    return(
    <div>
        <Sozinhoinputlogin 
            label="Email"
            value={email}
            type="email"
            onChange={newValue => setEmail(newValue)}
        /> 

        <Sozinhoinputlogin 
            label="Senha"
            value={senha}
            type="password"
            onChange={newValue => setSenha(newValue)}
        /> 

       <Sozinhobotao 
            type="button" 
            onClick={clickBotao}>
            Entrar
        </Sozinhobotao>
    </div>
    );
}

