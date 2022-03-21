import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('Pruebas del <RealExampleRef />', () => {
    
    const wrapper = shallow( <RealExampleRef /> );

    test('Debe mostrarse correctamente', () => { 
           
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(false);
     });

     test('Debe mostrar la información', () => { 

        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
        
     });



});