"use client"

import "../globals.css";


export default function ComponenteChat(props) {

  let nombre = ""
  nombre =  '/' + props.nombreUsuario + 'Chat';
  console.log(nombre);

  return (

      <div className="chat">
        <h1>{props.nombreUsuario}</h1>
      </div>
  
  );
};