import React from 'react'
import { Wrapper } from '../elements/Wrapper'
import Todo from '../components/Todo'
import Add from '../components/Add'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const deleteHandle = (i) => {
        console.log(i)
    }

    return (
        <>
            <Add />
            
            <Wrapper>
                {todos.map((todo, i) => todos.length === 0 ? (
                    <p>You don't have any tasks</p>
                ) : (
                    <Todo
                        key={i}
                        name={todo.text}
                        dueDate={todo.dueDate}
                        deleteHandle={() => deleteHandle(i)}
                    />
                ))}
            </Wrapper>
        </>
    )
}