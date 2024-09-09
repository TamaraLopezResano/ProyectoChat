"use-client"

export default function componenteMensaje(props){
    return(
        <div className="mensaje">
            <p>{props.textoMensaje}</p>
        </div>
    );
}