import TodoContext from '@/Context/TodoContext'
import React, { useContext } from 'react'


const Headers = () => {

    const { todos } = useContext(TodoContext);
    console.log(todos);
    return (
        <h1 className='text-3xl font-bold mb-6 text-center'>Todo List ( {todos.length})</h1>
    )
}

export default Headers