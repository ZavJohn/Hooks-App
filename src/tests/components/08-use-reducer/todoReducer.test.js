import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-use-reducer/todoReducer';
import { demosTodos } from '../../fixtures/demosTodos';

describe('Pruebas del <todoReducer />', () => {

    test('Debe retornar el estado por defecto', () => { 

        const state = todoReducer( demosTodos, {} )
           
        expect( state ).toEqual( demosTodos );
     });

     test('Debe agregar un todo', () => { 

        const newTodo = {
            id: 3,
            desc: 'Aprender Mongo',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }
        const state = todoReducer( demosTodos, action )

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demosTodos, newTodo] );
        
     });

     test('Debe eliminar un todo', () => {  
        
        const action = {
            type: 'delete',
            payload: 1
        }
        const state = todoReducer( demosTodos, action )

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [demosTodos[1]] );
        
     });

     test('Debe hacer el toggle de un todo', () => {  
        
        const action = {
            type: 'toggle',
            payload: 1
        }
        const state = todoReducer( demosTodos, action )

        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demosTodos[1] );
        
     });



});