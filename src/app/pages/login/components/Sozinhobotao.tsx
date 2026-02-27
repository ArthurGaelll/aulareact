interface ISozinhobotao {
    type?: "submit" | "reset" | "button" | undefined;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Sozinhobotao: React.FC <ISozinhobotao> = ({type, onClick , children}) => {
    return (
        <button 
            type={type}
            onClick={onClick}>
            {children}
        </button>
    );
    
}