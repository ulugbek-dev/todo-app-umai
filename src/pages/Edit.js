import React, { useState } from 'react'
import { Wrapper } from './../elements/Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import ModernDatepicker from 'react-modern-datepicker'
import { Redirect } from 'react-router'

export default function Edit({ match }) {

    // Hooks
    const [saved, setSaved] = useState(false)
    const editTodo = useSelector(state => state.todos.filter(todo => todo.id === match.params.id))
    const dispatch = useDispatch()
    const [todo, setTodo] = useState(editTodo[0].text)
    const [dueDate, setDueDate] = useState(editTodo[0].dueDate)
    
    // Handlers
    const submitHandle = (e) => {
        e.preventDefault()
        if(todo.trim() === '') return;

        dispatch({
            type: 'EDIT',
            payload: {
                todo: {
                    id: editTodo[0].id,
                    text: todo,
                    dueDate: dueDate,
                },
                message: 'Saved'
            }
        })

        setSaved(true)
    }
    const handleDateChange = date => {
        setDueDate(date)
    }

    // Saving listener for redirection
    if(saved === true) {
        return <Redirect to='/' />
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
                <button>Save</button>
            </form>
        </Wrapper>
    )
}