import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"

import React, { useReducer, useRef } from 'react'
import TotoList from './TotoList'
import Headers from './Headers'
import TodoContext from '@/Context/TodoContext'

const initialstate = []

export const TODOS_ACTIONS = {
    ADD_TASK: "ADD_TASK",
    DELETE_TASK: 'DELETE_TASK',
    RESET_TASK: "RESET_TASK"
}

function reducer(state, action) {
    switch (action.type) {
        case TODOS_ACTIONS.ADD_TASK:
            return [
                ...state,
                {
                    id: state.length + 1,
                    name: action.payload
                }
            ]
        case TODOS_ACTIONS.DELETE_TASK:
            return state.filter(task => task.id !== action.payload)
        case TODOS_ACTIONS.RESET_TASK:
            return init(action.payload)
        default:
            return state
    }
}

function init(initialState) {
    return [...initialState, { id: 1, name: 'Task 1' }]
}

const UseReducer = () => {
    const [todos, dispatch] = useReducer(reducer, initialstate, init)
    let inputRef = useRef()

    const handleAddTask = () => {
        if (inputRef.current.value.trim()) {
            dispatch({ type: TODOS_ACTIONS.ADD_TASK, payload: inputRef.current.value })
            inputRef.current.value = ''
        }
    }

    const data = {
        todos,
        dispatch
    }

    return (
        <TodoContext.Provider value={data}>
            <div className='container mx-auto p-4'>

                <Headers length={todos.length} />
                <div className='flex items-center gap-4 justify-center mb-4'>
                    <Input
                        ref={inputRef}
                        type='text'
                        className='flex w-64 border border-gray-300 p-2 rounded-md mr-2 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300'
                        placeholder='Add a new task'
                    />
                    <Button
                        onClick={handleAddTask}
                        className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300'
                    >
                        Add Task
                    </Button>
                    <Button
                        onClick={() => dispatch({ type: TODOS_ACTIONS.RESET_TASK, payload: initialstate })}
                        className='bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300'
                    >
                        Reset
                    </Button>
                </div>
                <TotoList />
            </div>
        </TodoContext.Provider>
    )

}

export default UseReducer
