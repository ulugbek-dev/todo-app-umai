import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from '../elements/Wrapper'
import { Header } from './../elements/Header'

const H1 = styled.h1`
    font-size: 32px;
    span {
        color: #37bd95;
    }
`

export default function Navbar() {
    return (
        <Wrapper vertical>
            <Header>
                <H1>To<span>Do</span></H1>
                
                <div>
                    <NavLink activeClassName="active" exact to="/">Pending<span className="pending-in"></span></NavLink>
                    <NavLink activeClassName="active" exact to="/completed">Completed<span className="completed-in"></span></NavLink>
                    <NavLink activeClassName="active" exact to="/trash">Trash<span className="trash-in"></span></NavLink>
                    <NavLink activeClassName="active" exact to="/add-task">Add</NavLink>
                </div>
            </Header>
        </Wrapper>
    )
}