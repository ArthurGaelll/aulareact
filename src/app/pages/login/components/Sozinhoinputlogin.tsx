interface ISozinhoinputlogjn{
    label:string
    value: string
    type: string
    onChange: (newValue: string) => void;
}

export const Sozinhoinputlogin: React.FC<ISozinhoinputlogjn> = (props) => {
    return(
        
        <label>
            <span>{props.label}</span>
            <input 
                value={props.value}
                type={props.type}
                onChange={e => props.onChange(e.target.value)}
            />
        </label>
       
    );
}