import React, { useCallback } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { ShowIncrement } from './ShowIncrement';


import '../02-useEffect/effects.css';


export const CallbackHook = () => {
    
    const { counter, increment } = useCounter( 0 );
  
  
  
  
    return (
    <>
        <h1> CallbackHook </h1>
        <hr />

        <h2> Counter: <small> { counter } </small></h2>
        <ShowIncrement increment={ increment } />
        
    </>
  )
}
