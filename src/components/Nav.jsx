import React from 'react'
import '../styles/nav.css'
import { IoTicketSharp } from "react-icons/io5";


export default function Nav() {

  return (
    <div className='nav-container'>
        <h1>TicketMania <IoTicketSharp /></h1>
        <button>registrarse</button>
    </div>
  )
}
