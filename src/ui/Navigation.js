import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
<nav className="bg-gray-950">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between h-16 ">
    <div className="flex items-center">
      <NavLink end to="/" className="text-red-500 hover:text-red-600 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Menú Principal</NavLink>
      <NavLink end to="/login" className="text-red-500 hover:text-red-600 rounded-md px-3 py-2 text-sm font-medium">Iniciar Sesión</NavLink>
      <NavLink end to="/register-user" className="text-red-500 hover:text-red-600 rounded-md px-3 py-2 text-sm font-medium">Registrarse</NavLink>
      <NavLink end to="/trainings" className='text-red-500 hover:text-red-600 rounded-md px-3 py-2 text-sm font-medium'>Entrenamientos</NavLink>
    </div>
  </div>
</nav>

    );
}

export default Nav;
