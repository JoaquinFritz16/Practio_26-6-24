import './Ejercicio1.css';
import {useState} from "react";
export default function Ejercicio1() {
  const [productos, Setproductos] = useState({
    'Set de cables':'$'+10,
    'Batería':'$'+50,
    'Óptica':'$'+100
  });
  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione un producto: </label>
      <select className="select-box">
      {Object.keys(productos).map((producto, index) => (
          <option key={index} value={producto}>
            {producto} (Precio: {productos[producto]})
          </option>
        ))}
      </select>

    </div>
  )
}