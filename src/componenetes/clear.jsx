import React from "react";

function Eliminar(props) {
    return(
        <div className="boton-clear" onClick={props.manejarclear}>
            {props.children}
        </div>
    )
}

export default Eliminar;