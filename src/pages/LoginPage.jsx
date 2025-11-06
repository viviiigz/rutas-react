import { useForm } from '../hooks/useForm.js';
import { useNavigate, Link } from 'react-router'; 

export const Login = () => { 
    // inicializamos useNavigate
    const navigate = useNavigate();
    
    // manejo de estadps
    const { formValues, handleChange, handleReset} = useForm({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault(); 

        // validaciones
        if (formValues.username.trim() === '' || formValues.password.trim() === '') {
            console.error("Complete ambos campos.");
            return;
        }

        // guardams el estado de logueo
        localStorage.setItem('isLogged', 'true'); 

        // 
        navigate('/home', {
            replace: true 
        });

        handleReset(); //limpiamos el form
    };

    return (
        <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
                <div className="card shadow p-4 mt-5">
                    <h1 className="card-title text-center text-primary mb-4">Iniciar Sesión</h1>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username:</label>
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                value={formValues.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={formValues.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-primary w-100 mt-3">
                            Login
                        </button>
                        
                        <p className="mt-3 text-center">
                            ¿No tienes cuenta? <Link to="/register">Regístrate</Link> 
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};