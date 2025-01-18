import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DetailsContainer } from "./DetailsContainer"

export function RecetasDetailsContainer() {

    const [details, setDetails] = useState([])
    const { idc } = useParams()

    useEffect(() => {

        fetch('../data/Recetas.json')
            .then(Response => Response.json())
            .then(Lista => {
                const Detalles = Lista.find(el => el.id == idc)
                if (Detalles)
                    setDetails(Detalles)
            })

    }, [idc])

    return (
        <div className="detailsContainer">
            <DetailsContainer detalles={details} />
        </div>
    )
}

