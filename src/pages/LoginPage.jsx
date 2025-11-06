import { useForm } from '../hooks/UseForm.js';

export const Login = ({ onLogin, user, onLogout }) => { //los props 
  const { formValues, handleChange, handleReset} = useForm({
    email: '',
    password: ''
  });

  
   //el profe lo puso en useForm
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (onLogin) {
      onLogin(formValues.email);
    }

    handleReset();
  };
  return (
    <div>
        {user && (
        <div>
          <h1>¡Hola de nuevo {user}!</h1>
        </div>
      )}

      <form onSubmit={handleSubmit}>
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
           <div style={{ marginTop: '20px' }}>
          <button type="submit">Login</button>
          
          {/* logout solo visible cuando hay usuario */}
          {user && (
            <button 
              type="button" 
              onClick={onLogout}
              style={{marginTop: '20px'}}
            >
              Logout
            </button>
          )}
        </div>
      </form>

   
    </div>
  );
};
