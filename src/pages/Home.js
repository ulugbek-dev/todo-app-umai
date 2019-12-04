import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../elements/Wrapper'
import { useSelector, useDispatch } from 'react-redux'

const Card = styled.div`
    display: flex;
    width: 100%;
    padding: 14px 25px;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: .2s;
    :hover {
        background: rgba(0, 0, 0, .4);
        border-bottom: 1px solid #37bd95;
    }
    h2 {
        color: #f3f3f3;
        font-size: 22px;
        font-weight: 500;
        margin: 0;
        margin-bottom: 8px;
    }
    p {
        color: #b3b3b3;
        margin: 0;
        span {
            padding-left: 8px;
            color: #f3f3f3;
        }
    }
`

export default function Home() {

    const todos = useSelector(state => state)
    console.log(todos)
    const dispatch = useDispatch()

    return (
        <Wrapper>
            <Card>
                <div>
                    <h2>Task name</h2>
                    <p>Due date: <span>date</span></p>
                </div>
                
            </Card>
        </Wrapper>
    )
}