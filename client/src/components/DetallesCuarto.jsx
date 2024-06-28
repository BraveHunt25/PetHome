import { useParams } from "react-router-dom";

function DetallesCuarto() {
    const { idCuarto } = useParams();

    return (
        <>
            <div>Aquí va el detalle del elemento con id: {idCuarto}</div>
        </>
    )
}

export default DetallesCuarto;