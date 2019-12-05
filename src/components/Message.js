import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

const MessageText = styled.div`
    position: absolute;
    background: rgba(55, 189, 149, .4);
    padding: 14px 24px;
    border-radius: 4px;
    bottom: 30px;
    right: 30px;
    display: none;
`

export default function Message() {

    // Hooks
    const message = useSelector(state => state.message)
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    // Hide message timeout
    if(message.className === 'show') {
        // Update Local Storage
        localStorage.setItem('Todos', JSON.stringify(todos))
        
        setTimeout(() => {
            dispatch({
                type: 'HIDE_MESSAGE',
                payload: ''
            })
        }, 2000)
    }

    return (
        <div className={message.className}>
            <MessageText>
                {message.text}
            </MessageText>
        </div>
    )
}