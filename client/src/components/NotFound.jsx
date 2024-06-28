import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 1000)
    }, [])

    return (
        <div>Not Found </div>
    )
}
export default NotFound;