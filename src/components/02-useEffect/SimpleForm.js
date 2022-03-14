import React, { useEffect, useState } from 'react';

import './effects.css';


export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;
    
    useEffect( () => {


    }, []);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value 
        });
    }
  
    return (
    <>
        <h2> useEffect </h2>  
        <hr />

        <form className="form-group">
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
        </form>

        {/* { name && <Message />} */}
        
    </>
  )
}
