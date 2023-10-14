import React, { useState } from "react";
import { useAuth } from '../firebase/AuthContext';

function Login() {

  const [error, setError] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      alert("Inició sesión")
    } catch (error) {
      setError(error.message)
    }
  };

  return (

    <div className="bg-black p-4 shadow-md flex justify-center items-center ">
      <form onSubmit={handleLogin}>

        <label htmlFor="password" className="block text-red-500 font-semibold mb-2">
          Correo Electrónico
        </label>
        <input
          className="border border-red-500 rounded-md px-3 py-2 w-full shadow shadow-red-500"
          type="email"
        />

        <label htmlFor="password" className="block text-red-500 font-semibold mb-2">
          Contraseña:
        </label>
        <input
          className="border border-red-500 rounded-md px-3 py-2 w-full shadow shadow-red-500"
          type="password"
        />

        <br></br>
        <br></br>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mx-auto">
          Ingresar 
        </button>

        <br></br>
        <br></br>

        {error && <p className="block text-red-500 font-semibold mb-2" >{error}</p>}

        <br></br>
        <br></br>

        <img
          src="https://es.godaddy.com/blog/wp-content/uploads/sitio-web-para-gimnasio.jpg"
          alt="Imagen de ejemplo"
          class="opacity- w-full h-auto"
        />

      </form>
    </div>

  );
}

export default Login;