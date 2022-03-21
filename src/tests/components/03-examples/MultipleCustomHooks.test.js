import React from 'react';
import { shallow } from 'enzyme';
import  { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import '@testing-library/jest-dom';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');


describe('Pruebas del <MultipleCustomHooks />', () => {
    
    
    test('Debe mostrarse correctamente', () => { 

        useFetch.mockReturnValue({
            data: null,
            loading: false,
            error: null
        })
       
        const wrapper = shallow( <MultipleCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();
     });

     test('Debe mostrar la información', () => { 

        useFetch.mockReturnValue({
            data: [{
                author: 'Jonathan',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Jonathan' );
        
     });



});