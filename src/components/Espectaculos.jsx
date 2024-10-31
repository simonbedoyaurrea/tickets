import React, { useState } from 'react';
import EspectaculosCard from './EspectaculosCard';
import '../styles/espectaculos.css';
import { useNavigate } from 'react-router-dom';



export default function Espectaculos({ ciudad, espectaculo }) {

  const [filtro, setFiltro] = useState('Todos');
  const navigate = useNavigate();
  
  const handleClickBack = () => {
      navigate('/')
  };


  const manejarFiltro = (tipo) => {
    setFiltro(tipo);
  };

  const eventosFiltrados = espectaculo.filter((e) => {
    if (filtro === 'Todos') return true; 
    return e.tipo === filtro;
  });

  



  return (
    <div>
      <div className='ciudad-filtro'>
        <h2  >{ciudad}</h2>
        <div className='filtros'>
          <p>Filtros</p>
          <button onClick={() => manejarFiltro('Todos')}>Todos</button>
          <button onClick={() => manejarFiltro('Evento Deportivo')}>Deportivo</button>
          <button onClick={() => manejarFiltro('Teatro')}>Teatro</button>
          <button onClick={() => manejarFiltro('Concierto')}>Conciertos</button>
        </div>
      </div>
      <div className='atras-boton'>
        <button onClick={handleClickBack}>atras</button>
      </div>
      
      <div className='card-container'>
        {eventosFiltrados.map(e => (
          <EspectaculosCard key={e.nombre} eventoInfo={e} />
        ))}
      </div>
    </div>
  );
}
