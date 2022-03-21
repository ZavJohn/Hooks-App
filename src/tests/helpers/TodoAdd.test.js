
import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../helpers/TodoAdd';
import '@testing-library/jest-dom';


describe('Pruebas del <TodoAdd/>', () => {

    const handleAddTodo = jest.fn();
    
    const wrapper = shallow(
        <TodoAdd
            handleAddTodo= { handleAddTodo }
        />
        )

    test('Debe mostrarse correctamente', () => { 

        expect( wrapper ).toMatchSnapshot();
     });

     test('No debe llamar el handleAddTodo', () => { 

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault () {} });

        expect( handleAddTodo).toHaveBeenCalledTimes(0);
     });

     test('Debe llamar el handleAddTodo', () => { 

        const value = 'Aprender react';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });
    
        const formSubmit =wrapper.find('form').prop('onSubmit')
        formSubmit({ preventDefault (){} });
        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenLastCalledWith( expect.any(Object) );
        expect( handleAddTodo ).toHaveBeenLastCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        });

        expect( wrapper.find('input').prop('value') ).toBe('');
     });


});