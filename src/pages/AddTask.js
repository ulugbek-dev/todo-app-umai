import React, { useState } from 'react'
import { Wrapper } from './../elements/Wrapper'
import { date } from './../components/Date'
import ModernDatepicker from 'react-modern-datepicker'
import { useSelector, useDispatch } from 'react-redux'

const uuid = require('uuid')

export default function AddTask() {
    
    // Hooks
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')
    const [dueDate, setDueDate] = useState('')

    // Handlers
    const submitHandle = (e) => {
        e.preventDefault()
        if(todo.trim() === '' || dueDate.trim() === '') {
            alert('Both inputs are required')
            return;
        }

        dispatch({
            type: 'ADD',
            payload: {
                todo: {
                    id: uuid(),
                    text: todo,
                    dueDate: dueDate,
                    addedDate: date(),
                    completed: false,
                    deleted: false
                },
                message: 'Todo was added'
            }
        })

        setTodo('')        
        setDueDate('')        
    }

    const handleDateChange = date => {
        setDueDate(date)
    }

    return (
        <Wrapper vertical>
            <form onSubmit={submitHandle}>
                <input 
                    placeholder="Enter task"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <ModernDatepicker
                    date={dueDate}
                    format={'DD-MM-YYYY'}
                    showBorder
                    className="color"
                    id="someId"
                    onChange={date => handleDateChange(date)}
                    placeholder={'Select a due date'}
                    primaryColor={'#37bd95'}
                    secondaryColor={'#f3f3f3'}
                    primaryTextColor={'#4f6457'}
                    secondaryTextColor={'#acd0c0'}

                />
                <button>Add Task</button>
            </form>
        </Wrapper>
    )
}