import React, { useState } from 'react'
import { Wrapper } from './../elements/Wrapper'
import { useDispatch } from 'react-redux'
import { date } from './../components/Date'

const uuid = require('uuid')

export default function AddTask() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')

    // Handlers
    const submitHandle = (e) => {
        e.preventDefault()
        if(todo.trim() === '') return;

        dispatch({
            id: uuid(),
            type: 'ADD',
            payload: {
                id: uuid(),
                text: todo,
                dueDate: date(),
                completed: false,
                deleted: false
            }
        })

        setTodo('')        
    }

    return (
        <Wrapper vertical>
            <form onSubmit={submitHandle}>
                <input 
                    placeholder="Enter task"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button>Add Task</button>
            </form>
        </Wrapper>
    )
}