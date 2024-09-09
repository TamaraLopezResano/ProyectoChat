"use-client"

import ComponenteMensaje from "@/components/Mensaje.jsx"
import ComponenteMensajePropio from "@/components/mensajePropio.jsx"
import usuarios from "@/components/jason-chats.json"

export default function Home() {

    
    return(
    <div>
        
        <h1>Lucas</h1>

        {usuarios[0].MensajesPropios.map((mensajePropio) => 
        {return(<ComponenteMensajePropio textoMensajePropio={mensajePropio}/>)}
        )}

        {usuarios[0].Mensajes.map((mensaje) => 
        {return(<ComponenteMensaje textoMensaje={mensaje}/>)}
        )}

    </div>
    )
}