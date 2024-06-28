import React from "react";
import { Link } from "react-router-dom";
import './login.css';
import { signinSchema } from "../../../server/schemas/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signinSchema),
    });
    const { signin, errors: loginErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => signin(data);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/tasks");
        }
    }, [isAuthenticated]);

{/*}
    return (
        <div className="bg-[#fed7aa] h-[calc(100vh-100px)] flex items-center justify-center">
            <Card>
                {loginErrors.map((error, i) => (
                    <Message message={error} key={i} />
                ))}
                <h1 className="text-2xl font-bold">Iniciar Sesión</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="email">Email:</Label>
                    <p className="text-red-500">{errors.email?.message}</p>

                    <Label htmlFor="password">Contraseña:</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Escribe tu contraseña"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    <p className="text-red-500">{errors.password?.message}</p>

                    <Button>Ingresar</Button>
                </form>

                <p className="flex gap-x-2 justify-between">
                    No tienes cuenta? <Link to="/register" className="text-[#3b82f6]">Registrarse</Link>
                </p>
            </Card>
        </div>
    );
}
*/}
return (
    <div>
        <header className="header">
            <article className="imagenLogo">
                <img src="../imagenes/logo.jpg" alt="logo" height="100" width="100" />
            </article>
            <h1>PetHome</h1>
        </header>
        <div className="container">
            <h2>Ingresar</h2>
            <form action="register.php" method="POST">
                <fieldset className="dpIzquierda">
                    <label htmlFor="email">Correo electrónico:</label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="tu_email@gmail.com"
                        {...register("email", { required: true })}
                    />

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" maxLength="10" required />
                    <p>Olvidaste tu contraseña? <Link to="../recuperarContra/recuperarContra_email.html">Recuperar contraseña</Link></p>
                </fieldset>
                <button type="button" onClick={() => { window.location.href = '../home/homeCliente.html' }}>Ingresar</button>
            </form>
            <p>Aun no tienes una cuenta? <Link to="../register/register.html">Registrarse</Link></p>
        </div>
        <footer className="footer">
            <div className="footer-content">
                <p><i className="fas fa-phone-alt"></i> Contactanos: +1 (555) 123-4567</p>
                <div className="social-media">
                    <a href="https://www.facebook.com/profile.php?id=61560565757485&is_tour_dismissed" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a> |
                    <a href="https://x.com/PetHomeOficial" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a> |
                    <a href="https://www.instagram.com/pethomeog/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a> |
                    <a href="https://www.linkedin.com/company/PetHome" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                </div>
            </div>
        </footer>
    </div>
);
}

export default Login;
