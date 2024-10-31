import './App.css'
import Citys from './components/Citys'
import Espectaculos from './components/Espectaculos'
import Nav from './components/Nav'
import EventosMedellin from './json/Medellin.json'
import EventosCali from './json/Cali.json'
import EventosBogota from './json/Bogota.json'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComprarBoletas from './components/ComprarBoletas'


function App() {
  

  return (
    <>
      <Nav />

      <Router>
      <Routes>
        <Route path="/" element={
        <>
          <div className='city-container'>
            <Citys nombre={'Medellin'} imagen={`https://www.semana.com/resizer/v2/TXYNYBTBSJFWJOKAWZ2FPSAKUM.jpg?auth=a09223b46e0d3e9b00e655c7e827e7f335ff4ada894e213e6111763eb7e45998&smart=true&quality=75&width=1280&height=720`}/>
            <Citys nombre={'Bogota'} imagen={'https://grancolombiatours.com/wp-content/uploads/2023/05/Places-to-visit-in-Bogota.jpg'} />
            <Citys nombre={'Cali'} imagen={'https://www.semana.com/resizer/v2/5DVGZ2YGIJBCLA5QMD7DCKWLHI.jpg?auth=a1c257dfb2110b9982e1dc5f5dabf39d4be0b843ec48c01697e329337982a492&smart=true&quality=75&width=1280&height=720'} />
          </div>
        </>} />
        <Route path="/eventosmedellin" element={<Espectaculos ciudad={'Medellin'} espectaculo={EventosMedellin}/>} />
        <Route path="/eventosbogota" element={<Espectaculos ciudad={'Bogota'} espectaculo={EventosBogota}/>} />
        <Route path="/eventosCali" element={<Espectaculos ciudad={'Cali'} espectaculo={EventosCali}/>} />
        <Route path="/detalles/:id" element={<ComprarBoletas />} /> 

      </Routes>
    </Router>
    </>
  )
}


export default App
