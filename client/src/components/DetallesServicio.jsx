import { useParams } from "react-router-dom";

function DetallesServicio() {
    const { idServicio } = useParams();

    return (
        <>
            <div>Aquí va el detalle del elemento con id: {idServicio}</div>
        </>
    )
}

export default DetallesServicio;