import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  
  const usuario = {
    id: 263025,
    name: 'Jonathan Zavala',
    direccion: 'DAF'
  };

const { setUser } = useContext ( UserContext );

  return (
    <>
        <h1>Ingresar a tu cuenta</h1>
        <hr />

        <button
          type="button" 
          className="btn btn-secondary"
          onClick={ () => {
            setUser( {
              id: usuario.id,
              name: usuario.name,
              direccion: usuario.direccion
            });
        }} 
        >
          Login
        </button>
    </>
  )
}
