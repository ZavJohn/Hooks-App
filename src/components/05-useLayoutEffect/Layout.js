import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

import '../02-useEffect/effects.css'

export const Layout = () => {
  
    const { counter, increment } = useCounter(1);
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    const { quote } = !!data && data[0];

    const parrafo = useRef();
    
    useLayoutEffect ( () => {


    }, [ quote ])
    return (
    <div>
        <h2>Layout Effects</h2>
        <hr />

        <blockquote className="blockquote text-rigth">
            <p 
                className="mb-0"
                ref={ parrafo }
            >
                { quote }
            </p>  
        </blockquote> 

        <button 
            onClick={ increment }
            className="btn btn-primary"
        >
            Next quote
        </button>
               
    </div>
  )
}
