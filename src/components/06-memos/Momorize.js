import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../02-useEffect/effects.css';


export const Momorize = () => {
  
  const { counter, increment } = useCounter( 0 );
  const [ show, setShow ] = useState( true );
  

    return (
    <>
        <h2> Counter: <Small value= { counter } /> </h2>
        <hr />

        <button
            className="btn btn-primary"
            onClick={ increment }
        >
            +1
        </button>

        <button
            className="btn btn-primary ml-7"
            onClick= { () => {
                setShow( !show )
            }}
        >
            Show / Hide { JSON.stringify( show ) }
        </button>
    
    </>
  )
}
