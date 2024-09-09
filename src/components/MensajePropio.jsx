"use-client"

export default function componenteMensajePropio(props){
    return(
        <div className="mensajePropio">
            <p>{props.textoMensajePropio}</p>
        </div>
    );
}