import { useForm } from '../hooks/useForm.js';
import { useNavigate, Link } from 'react-router'; 

// Usamos export const Register para mantener la consistencia
export const Register = () => {
    // Inicializamos useNavigate
    const navigate = useNavigate();

    const { formValues, handleChange, handleReset } = useForm({
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // validaciones básicas
        if (formValues.username.trim() === '' || formValues.email.trim() === '' || formValues.password.trim() === '') {
            console.error('Por favor, complete al menos los campos obligatorios.');
            return;
        }

   
        console.log('Datos de registro procesados:', formValues);
        
      
        handleReset();

        // redirifinmos al login
        navigate('/login', {
            replace: true // reeemplaxa el historial para que el usuario no pueda volver al registro
        });
    };

    return (
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
                <div className="card shadow p-4 mt-5">
                    <h2 className="card-title text-center text-success mb-4">Registro de Usuario</h2>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={formValues.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">First Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="firstname"
                                value={formValues.firstname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="form-label">Last Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastname"
                                value={formValues.lastname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-success w-100">
                            Registrarse
                        </button>
                        
                        <p className="mt-3 text-center">
                            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};