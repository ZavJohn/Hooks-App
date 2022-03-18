const initialState = [{
    id: 1,
    toDo: 'Comprar pan',
    done: false
}];

const toDoReducer = ( state = initialState, action ) => {

    if( action?.type === 'Agregar' ){
        return [ ...state, action.payLoad ];
    }
    
    return state;
}

let todos = toDoReducer();

const newToDo = {
    id: 2,
    toDo: 'comprar leche',
    done: false
}

const addToDoAction = {
    type: 'Agregar',
    payLoad: newToDo
}

todos = toDoReducer( todos, addToDoAction );




console.log(todos);