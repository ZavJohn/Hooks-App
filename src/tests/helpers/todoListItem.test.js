
import React from 'react';
import { shallow } from 'enzyme';

import { TodoListItem } from '../../helpers/TodoListItem';
import { demosTodos } from '../fixtures/demosTodos';
import '@testing-library/jest-dom';

describe('Pruebas del <todoListItem/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    const wrapper = shallow(
        <TodoListItem 
            todo= { demosTodos[0] }
            handleDelete= { handleDelete }
            handleToggle= { handleToggle }
            index={0}
        />);

    test('Debe mostrarse correctamente', () => { 

        expect( wrapper ).toMatchSnapshot();
     });

     test('Debe llamar el handdleDelete', () => { 

        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demosTodos[0].id );
        
     });

     test('Debe llamar el handleToggle', () => { 

        expect( wrapper ).toMatchSnapshot();wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demosTodos[0].id );

     });

     test('Debe mostrar el texto correctamente', () => { 

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(`1.${ demosTodos[0].desc }`);
     });

     test('Debe tener la clase complete', () => { 

        const todo = demosTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo= { todo }
            />);
        expect( wrapper.find('p').hasClass('complete') ).toBe(true);
     });



});