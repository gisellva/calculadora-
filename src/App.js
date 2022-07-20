import './App.css';
import Boton from './componenetes/boton';
import './hojas de estilo/boton.css';
import Pantalla from './componenetes/pantalla';
import './hojas de estilo/pantalla.css';
import './hojas de estilo/clear.css';
import {useState} from 'react';
import Eliminar from './componenetes/clear';
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'

function App() {

   const[input,setinput]=useState('');
   const agregar=val=>{
    setinput( input + val );
   };
   const eliminar=()=>{
    setinput("")
   };
   function calcular() {
    if (input) {
      setinput(evaluate(input));
    }
    else{
      alert("ingresar los valores que deseas para realizar los calculos ")
    }
    
   }
  

  return (
    <div className="App">
      <div className='logo-contenedor'>
      <h1>calculadora interactiva</h1>
      <img
        src='https://img.freepik.com/vector-gratis/diseno-etiqueta-calculadora-aislada_1308-60994.jpg'
        alt='calculadora'
        width={50}
      />
      </div>
      <div className='contenedor-principal'>
      <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarclic={agregar}>1</Boton>
        <Boton manejarclic={agregar}>2</Boton>
        <Boton manejarclic={agregar}>3</Boton>
        <Boton manejarclic={agregar}>+</Boton>
      </div>
      <div className='fila'>
       <Boton manejarclic={agregar}>4</Boton>
       <Boton manejarclic={agregar}>5</Boton>
       <Boton manejarclic={agregar}>6</Boton>
       <Boton manejarclic={agregar}>-</Boton>
      </div>
      <div className='fila'>
       <Boton manejarclic={agregar}>7</Boton>
       <Boton manejarclic={agregar}>8</Boton>
       <Boton manejarclic={agregar}>9</Boton>
       <Boton manejarclic={agregar}>*</Boton>
      </div>
      <div className='fila'>
       <Boton manejarclic={calcular}>=</Boton>
       <Boton manejarclic={agregar}>0</Boton>
       <Boton manejarclic={agregar}>.</Boton>
       <Boton manejarclic={agregar}>/</Boton>
      </div>
      <div className='fila'>
        <Eliminar manejarclear={eliminar}>clear</Eliminar>
      </div>
       </div>
    </div>
  );
}

export default App;
