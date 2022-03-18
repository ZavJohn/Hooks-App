import React from 'react'

export const TodoListItem = ({ todo, handleDelete, handleToggle, index }) => {
  return (
    <li
        key = { todo.id }
        className="list-group-item"
    > 
        <p className={`text-start ${ todo.done && 'complete'}`}
            onClick={ () => handleToggle ( todo.id )}
        >
                { index + 1 }.{ todo.desc }
            </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
                className="btn btn-danger btn-sm"
                onClick={ () => handleDelete( todo.id ) }
            >
                Borrar
            </button>
        </div>
    </li>
  )
}
