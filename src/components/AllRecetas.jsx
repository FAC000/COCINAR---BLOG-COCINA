import { useEffect, useState } from "react"
import { RecetasMap } from "./RecetasMap"
import { useParams } from "react-router-dom"

export function AllRecetas() {
    const [Recetas, setRecetas] = useState([])
    const { cid } = useParams()

    useEffect(() => {

        fetch('../data/Recetas.json')
            .then(Response => Response.json())
            .then(Lista => {
                if (cid) {
                    const categoriaFiltrada = Lista.filter(el => el.categoria == cid)
                    setRecetas(categoriaFiltrada)
                }
                else {
                    setRecetas(Lista)
                    
                }
            })

    }, [cid])


    return (
        <div className="todasContainer">
            <RecetasMap plantilla={'AllRecetas'} ListaR={Recetas} />
            
        </div>
    )
}



