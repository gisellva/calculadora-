import React from "react";

function Boton(props) {
    const esoperador=valor=>{
        return isNaN(valor) && (valor != ".") && (valor != "=") 
    };
    return(
        <div className={`boton-contenedor ${esoperador(props.children) ? "operador" : null} `}
        onClick={function(){
            props.manejarclic(props.children)
        }}>
           {props.children}
        </div>

    );
}

export default Boton;
