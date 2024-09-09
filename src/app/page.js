"use client"

import usuarios from "@/components/jason-chats.json"
import ComponenteChat from "@/components/chat.jsx";
import ComponenteAgregarMensajes from "@/components/agregarMensajes.jsx";
import { useEffect, useState } from "react";
import { useSocket } from "@/hooks/useSocket";

export default function Home() {

  const {socket, isConnected} = useSocket()

  useEffect(()  => {
    if(!socket) return;

    socket.on('pingAll', (data) => {console.log("recibido ", data)})

  }, [socket, isConnected])

  function handleClick(){
    socket.emit('pingAll', {message: "SE DICE EN EL LICEO QUE JARA SE COME EL PITOOOOO"})
  }

  return(
    <div>

      <h1>Whatsapp</h1>

      {usuarios.map((chat) => {
      return (<ComponenteChat nombreUsuario={chat.username}/>)}
      )}

      <ComponenteAgregarMensajes textButton="Lucas"/>

  </div>
  );
}
