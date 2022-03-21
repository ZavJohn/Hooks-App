import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';
import '@testing-library/jest-dom';

describe('Pruebas del hook useForm', () => {
    
    
    const initialForm = {
        name:'Liliana',
        email:'marliliana55@hotmail.com'
    };
    
    test('Debe regresar un formulario por defecto', () => { 
       
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof  handleInputChange ).toBe( 'function' );
        expect( typeof  reset ).toBe( 'function' );
     });

     test('Debe cambiar el valor del formulario (name)' , () => { 
        
        const changeForm = {
            target: {
                name: 'name',
                value: 'Jonathan'
            }   
        };
         
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange( changeForm );
        });

        const [ formValues ] = result.current;

        expect( formValues ).toEqual( {...initialForm, name: 'Jonathan'} );
     });

     test('Debe re-establecer el valor del formulario' , () => { 
        
         
        const { result } = renderHook( () => useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {

            handleInputChange( {
                target: {
                    name: 'name',
                    value: 'Jonathan'
                }      
        });

        reset();
        
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );
     });



});