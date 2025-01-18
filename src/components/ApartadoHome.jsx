import { Link } from "react-router-dom"


export function ApartadoHome() {
    return (
        <div className="apartadoHome">
        <div className="apartadoContainer">
            <div className="apartadoParrafo">
                <p>
                    ¡El verano está a la vuelta de la esquina y con él, las ganas de disfrutar de comidas al aire libre y sabores frescos! En este blog encontrarás una colección de recetas diseñadas para celebrar la temporada más cálida del año. Desde ensaladas vibrantes y coloridas hasta platos a la parrilla llenos de sabor, pasando por postres refrescantes y bebidas heladas, tenemos todo lo que necesitas para disfrutar al máximo de los días más largos y soleados.
                </p>

                <Link to={'/recetas'}>
                <button  >
                    LLevame a las recetas
                </button>
                </Link>
            </div>
        </div>
        </div>
    )
}
