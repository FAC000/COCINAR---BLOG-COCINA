
import { Link } from "react-router-dom"


export function AllRecetasList({ productos }) {
  return (
    <>

      <div className="allContainer">
        <Link to={`/recetas/${productos.id}`}>
          <div className="allImg">
            <img  src={`../img/${productos.imagen}`} />
            <div className="contentImg">
            <h1 className="allTitulo">{productos.receta}</h1>
            </div>
          </div>
        </Link>
      </div>

    </>
  )
}

