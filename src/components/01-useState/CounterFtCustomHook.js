import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterFtCustomHook = () => {
    
    const { state, increment, decrement, reset } = useCounter(0);
    
    return (
            <>
                <h2>Counter Ft. Hook: { state }</h2>
                <hr />

                <button 
                    onClick={ () => increment(1) }
                    className="btn btn-primary"
                >
                     +1
                 </button>
                 <p />
                <button 
                    onClick={ reset }
                    className="btn btn-primary"
                >
                     Reset 
                </button>
                <p />
                <button 
                    onClick={ () => decrement(1) }
                    className="btn btn-primary"
                >
                     -1 
                </button>
            </>
    )
}
