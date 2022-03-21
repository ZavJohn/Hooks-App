import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';
import '@testing-library/jest-dom';

describe('Pruebas del hook useCounter', () => {
    test('Debe retornar defaults', () => { 
        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe(0);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
     });

     test('Debe asignar default ingresado', () => { 
        const { result } =renderHook( () => useCounter(100) );

        expect( result.current.counter ).toBe(100);
     });

     test('Debe de incrementar el counter en 1', () => { 
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act( () => {
            increment();
        });

        const { counter } = result.current;

        expect( counter ).toBe(1);
      });

      test('Debe de decrementar el counter en 1', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();
        });

        const { counter } = result.current;

        expect( counter ).toBe(99);
      });

      test('Debe de resetear el contardor a su default', () => { 
        const { result } = renderHook( () => useCounter() );
        const { increment, reset } = result.current;

        act( () => {
            increment();
            reset();
        });

        const { counter } = result.current;

        expect( counter ).toBe(0);
      });


});