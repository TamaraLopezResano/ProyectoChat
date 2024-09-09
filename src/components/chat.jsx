"use client"

import Link from "next/link";
import "../globals.css";


export default function ComponenteChat(props) {

  let nombre = ""
  nombre =  '/' + props.nombreUsuario + 'Chat';
  console.log(nombre);

  return (

    <Link href={nombre}>
      <div className="chat">
        <h1>{props.nombreUsuario}</h1>
      </div>
    </Link>
  );
};