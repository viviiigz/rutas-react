import { NavLink, useNavigate } from 'react-router';

export const Navbar = () => {
    const navigate = useNavigate();
    // determinamos si el botón de Logout debe ser visible
    const isLogged = localStorage.getItem('isLogged') === 'true';

    // funcion para el lpogout
    const onLogout = () => {
        // elimino la clave de autenticación
        localStorage.removeItem('isLogged');
        // redirijo al login
        navigate('/login', {
            replace: true // reemplaxo la ruta actual en el historial
        });
    }

    return (
        // dark navbar y colores.
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    App Simpsons
                </NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        {/* Enlace a Home */}
                        <li className="nav-item">
                            <NavLink 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        {/* Botón de Logout condicional */}
                        {isLogged && (
                            <button
                                className="btn btn-outline-danger"
                                onClick={onLogout}
                            >
                                Logout
                            </button>
                        
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}