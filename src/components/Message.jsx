"use-client"

export default function componenteMensaje(props){
    return(
        <div className="message">
            <p>{props.textoMensaje}</p>
        </div>
    );
}