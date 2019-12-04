import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Wrapper } from '../elements/Wrapper'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
      margin-left: 34px;
      padding: 4px 0;
  }
  a.active {
      border-bottom: 2px solid #37bd95;
  }
`

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
                    <NavLink activeClassName="active" exact to="/">Home</NavLink>
                    <NavLink activeClassName="active" exact to="/completed">Completed</NavLink>
                    <NavLink activeClassName="active" exact to="/trash">Trash</NavLink>
                    <NavLink activeClassName="active" exact to="/edit">Edit</NavLink>
                </div>
            </Header>
        </Wrapper>
    )
}