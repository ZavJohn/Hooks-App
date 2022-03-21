
import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-use-reducer/TodoApp';
import { demosTodos } from '../../fixtures/demosTodos';
import '@testing-library/jest-dom';
import { act } from '@testing-library/react-hooks';

describe('Pruebas del <TodoApp/>', () => {
    
    const wrapper = shallow( <TodoApp />);

    Storage.prototype.setItem = jest.fn( () => {})

    test('Debe mostrarse correctamente', () => { 

        expect( wrapper ).toMatchSnapshot();
     });

     test('Debe de agregar un Todo', () => { 

        const wrapper = mount( <TodoApp /> );

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demosTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demosTodos[1] );
        });
        

        expect( wrapper.find('h2').text().trim() ).toBe( 'ToDos App (2)' );
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
     });


});