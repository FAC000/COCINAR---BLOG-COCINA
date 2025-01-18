import { useEffect, useState } from "react"
import { RecetasMap } from "./RecetasMap"

export const RecetasSelectas = () => {
    const [recetas, useRecetas] = useState([])
    useEffect(() => {
        fetch('../data/Recetas.json')
            .then(response => response.json())
            .then(lista => {
                let recetaSelecta = lista.filter(el => el.ultimas === "ultima")
                useRecetas(recetaSelecta)
            })

    }, [])


    return (
        <div className="selectasCont">
            <h1>Ultimas recetas!</h1>
            <hr />
            <div className="selectasContainer">
                <RecetasMap plantilla={"RecetasSelectas"} recetas={recetas} />
            </div>
        </div>
    )
}

