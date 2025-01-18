
import { RecetasList } from "./RecetasList"
import { AllRecetasList } from "./AllRecetasList"

export function RecetasMap({ ListaR, recetas, plantilla }) {
    return (
        <>
            {

                plantilla === 'RecetasSelectas'
                    ?
                    recetas.map(prod => < RecetasList key={prod.id} productos={prod} />)
                    :
                    ListaR.map(prod => < AllRecetasList key={prod.id} productos={prod} />)

            }


        </>
    )
}

