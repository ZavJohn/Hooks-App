import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';


export const MemoHook = () => {
  
  const { counter, increment } = useCounter( 2000 );
  const [ show, setShow ] = useState( true );
  
    

    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ]);


    return (
    <>
        <h1> Memo Hook </h1>
        <h2> Counter: <small> { counter } </small></h2>
        <hr />

        <p> { memoProcesoPesado } </p>

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