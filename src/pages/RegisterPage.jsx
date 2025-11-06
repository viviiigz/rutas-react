import { useForm } from '../hooks/UseForm.js';

export const Register = () => {
  const { formValues, handleChange, handleReset } = useForm({
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // mostrar datos en consola
    console.log('Datos de registro:', formValues);
    
    // resetear formulario
    handleReset();
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formValues.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formValues.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
