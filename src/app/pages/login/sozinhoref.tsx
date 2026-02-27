
import { useRef, useState } from "react";

export const Ref = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const inputsenharef = useRef<HTMLInputElement>(null);

    const clickBotao = () => {
        console.log(email);
        console.log(senha);

        if (inputsenharef != null) {
            inputsenharef.current?.focus()
        }
    }

    return (
        <div>
            <label>
                <span>Email</span>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => e.key === "Enter" ? inputsenharef.current?.focus : undefined}
                />
            </label>

            <label>
                <span>Senha</span>
                <input
                    ref={inputsenharef}
                    value={senha}
                    type="password"
                    onChange={e => setSenha(e.target.value)}
                />
            </label>

            <button type="button" onClick={clickBotao}>Entrar</button>
        </div>
    );
}