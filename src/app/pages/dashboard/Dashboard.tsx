import { useRef } from "react";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
    const counterRef = useRef({  counter: 0  })
     const { nomeDoUsuario, logout } = useUsuarioLogado();
   
    return(
        <div>
            <p>{nomeDoUsuario}</p>  

            <p>Contador {counterRef.current.counter} </p>

            <button onClick={()=> counterRef.current.counter++}>Somar</button>
            <button onClick={()=> console.log(counterRef.current.counter)}>Logar</button>
            <button onClick={logout}>Logout</button>
            <Link to="/entrar">Login</Link>  
            <Link to="/state">Teste</Link>  
            <Link to="/effect">Effect</Link> 
            <Link to="/memo">Memo</Link> 
            <Link to="/ref">Ref</Link> 
        </div>        
    );
}
