
import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../helpers/TodoList';
import { demosTodos } from '../fixtures/demosTodos';
import '@testing-library/jest-dom';

describe('Pruebas del <TodoList/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    const wrapper = shallow(
        <TodoList
            todos= { demosTodos }
            handleDelete= { handleDelete }
            handleToggle= { handleToggle }
        />
        )

    test('Debe mostrarse correctamente', () => { 

        expect( wrapper ).toMatchSnapshot();
     });

     test('Debe tener 2 elementos', () => { 

        expect( wrapper.find('TodoListItem').length ).toBe( demosTodos.length );
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
     });


});