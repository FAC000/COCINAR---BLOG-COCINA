
export function RecetasList({ productos }) {
  return (
 
      <div className="recetasCard">
        <img src={`../img/${productos.imagen}`} />
        <h2>{productos.receta}</h2>
        <p>{productos.descripcion}</p>
      </div>
   
  )
}

