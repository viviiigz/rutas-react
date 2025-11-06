import { Navigate } from 'react-router';

export const PublicRoute = ({ children }) => {

    const isLogged = localStorage.getItem('isLogged') === 'true';

    //  Si si está logueado redirigir a Home
    if (isLogged) {
        return <Navigate to="/home" />;
    }

    // si no está logueado renderizar el componente hijo  LoginPage
    return children;
}