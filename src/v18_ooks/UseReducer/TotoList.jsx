import React, { useContext } from 'react'
import { TODOS_ACTIONS } from './UseRducer'
import { Button } from '@/components/ui/button'
import TodoContext from '@/Context/TodoContext'



const TotoList = () => {
    const { todos, dispatch } = useContext(TodoContext)
    return (
        <>
            <ul className='list-disc list-inside mx-auto max-w-md'>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className='flex justify-between items-center p-3 mb-2 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 transition duration-300'
                    >
                        <span>{todo.name}</span>
                        <Button
                            onClick={() => dispatch({ type: TODOS_ACTIONS.DELETE_TASK, payload: todo.id })}
                            className='bg-red-500 text-white p-1 rounded-md hover:bg-red-600 transition duration-300'
                        >
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TotoList