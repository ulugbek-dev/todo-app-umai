import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

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

    const message = useSelector(state => state.message)

    return (
        <div className={message.className}>
            <MessageText>
                {message.text}
            </MessageText>
        </div>
    )
}