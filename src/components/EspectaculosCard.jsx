import React from 'react'
import '../styles/Espectaculos-card.css'
import { useNavigate } from 'react-router-dom'
import { FaClock } from "react-icons/fa";

export default function EspectaculosCard({eventoInfo}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detalles/${eventoInfo.nombre}`, { state: { eventoInfo } });
  };

  const today =new Date()
  const fecha =new Date(eventoInfo.fecha)

  const diferenciaTiempo=fecha-today
  const diferenciaDias=Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
  


  return (
    <div className='card' onClick={handleClick}>
        <div className='imagen-evento'>
          <div style={{"display":'flex'}}>
            <FaClock />
            <p>{diferenciaDias} Dias </p>
          </div>
        </div>
        <p className='nombre-espectaculo'>{eventoInfo.nombre}</p>
        <div className="lugar-fecha-evento">
            <p>{eventoInfo.lugar}</p>
            <p>{eventoInfo.fecha}</p>
            
        </div>
    </div>
  )
}
