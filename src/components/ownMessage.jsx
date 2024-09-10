"use-client"

export default function componenteMensajePropio(props){
    return(
        <div className="ownMessage">
            <p>{props.textoMensajePropio}</p>
        </div>
    );
}