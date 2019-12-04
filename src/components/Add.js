import React, { useState } from 'react'
import { Wrapper } from './../elements/Wrapper'

export default function Add() {

    const [todo, setTodo] = useState('')

    const submitHandle = (e) => {
        e.preventDefault()
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