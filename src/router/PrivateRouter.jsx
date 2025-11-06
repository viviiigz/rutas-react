import { Navigate } from 'react-router'

export const PrivateRoute = ({ children }) => {
    // verificar el estado de logueo
    const isLogged = localStorage.getItem('isLogged') === 'true';

    // si no está logueado forzar la redirección
    if (!isLogged) {
        // Redirigimos a la página de Login
        return <Navigate to="/login" />;
    }

    // si está logueado, renderizar el componente hijo HomePage
    return children;
}