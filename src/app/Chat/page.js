"use-client"

import ComponenteMensaje from "@/components/Message.jsx"
import ComponenteMensajePropio from "@/components/ownMessage.jsx"
import usuarios from "@/components/jason-chats.json"

export default function Home() {

    
    return(
    <div>
    
        <h1>A</h1>

        {usuarios[0].MensajesPropios.map((mensajePropio) => 
        {return(<ComponenteMensajePropio textoMensajePropio={mensajePropio}/>)}
        )}

        {usuarios[0].Mensajes.map((mensaje) => 
        {return(<ComponenteMensaje textoMensaje={mensaje}/>)}
        )}

    </div>
    )
}