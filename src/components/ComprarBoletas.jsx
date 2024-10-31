import React, { useState, useEffect } from 'react';
import '../styles/comprar-boletas.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ComprarBoletas() {
  const [contador, setContador] = useState(0);
  const [boletas, setBoletas] = useState(500);
  const [recaudacion, setRecaudacion] = useState(0);
  const [recaudacionFormato, setRecaudacionFormato] = useState('');
  const [boletasCompradas, setBoletasCompradas] = useState(0);

  const location = useLocation();
  const { eventoInfo } = location.state || {};
  
  const navigate = useNavigate();
  
  const handleClickBack = () => {
    navigate('/');
  };

  const RestarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const SumarContador = () => {
    if (contador < 5) {
      setContador(contador + 1);
    }
  };

  const Comprar = () => {
    if (boletasCompradas >= 5) {
      alert('No puedes comprar más de 5 boletas.');
      return; 
    }

    if (contador > 0 && contador <= boletas && boletasCompradas<5) {
      const totalCompra = eventoInfo.precio * contador;
      setBoletas(boletas - contador);
      setRecaudacion(recaudacion + totalCompra);
      setContador(0); 
      setBoletasCompradas(boletasCompradas+contador)
    }
    
  };


  useEffect(() => {
    const formatted = new Intl.NumberFormat('en-US').format(recaudacion);
    setRecaudacionFormato(formatted);
  }, [recaudacion]);

  return (
    <div className='contenedor-espectaculo'>
      <div className='atras-boton'>
        <button onClick={handleClickBack}>Atrás</button>
      </div>
      <div className='imagen-espectaculo'></div>
      <div className='info-espectaculo'>
        <h2 className='comprar-nombre-espectaculo'>{eventoInfo.nombre}</h2>
        <p className='comprar-lugar-espectaculo'>{eventoInfo.lugar}</p>
        <p className='comprar-fecha-espectaculo'>{eventoInfo.fecha}</p>
        <p className='comprar-precio-espectaculo'>{eventoInfo.precio}$</p>

        <div className='cantidad-boletas'>
          <span className='boletas restantes'>Boletas restantes: {boletas}</span>
          <div className='seleccionador-boletas'>
            <button onClick={RestarContador}>-</button>
            <p>{contador}</p>
            <button onClick={SumarContador}>+</button>
          </div>
          <button onClick={Comprar}>Comprar</button>
        </div>
      </div>
      <div>
        <p>Recaudado: ${recaudacionFormato}</p>
      </div>
    </div>
  );
}
