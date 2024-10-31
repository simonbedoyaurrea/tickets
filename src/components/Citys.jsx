import React from 'react'
import '../styles/cities.css'
import { useNavigate } from 'react-router-dom';

export default function Citys({nombre,imagen}) {

    const navigate = useNavigate();
  
    const handleClick = () => {
      if(nombre=='Medellin'){
        navigate('/eventosmedellin');
      }
      else if (nombre=='Cali'){
        navigate('/eventoscali')
      }else if(nombre=='Bogota'){
        navigate('/eventosbogota')
      }
    };

    return (
        <div className='ciudad-container' onClick={handleClick}>
            <img src={imagen} alt="nombre"  />
            <h2>{nombre}</h2>
        </div>
)
}
