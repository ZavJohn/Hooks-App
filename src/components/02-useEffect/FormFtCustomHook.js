import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';


export const FormFtCustomHook = () => {
  
    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;
  
    useEffect( () => {
        console.log('Edición de password')
    }, [ password ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues );
    }

    return (
    <form onSubmit={ handleSubmit }>
        <h2> Form con Custom Hook </h2>  
        <hr />

        <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Ingresa tu nombre..."
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
            />
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="example@gmail.com..."
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
            />

            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="***"
                value={ password }
                onChange={ handleInputChange }
            />
        </div>
        
        <button type="submit" className="btn btn-primary">
            Guardar
        </button>
    </form>
  )
}