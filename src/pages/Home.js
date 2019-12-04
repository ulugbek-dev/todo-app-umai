import React from 'react'
import { Wrapper } from './../elements/Wrapper'
import { EmptyTodo } from './../elements/EmptyTodo'
import Todo from './../components/Todo'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {

    const todos = useSelector(state => state.todos.filter(x => x.completed === false))
    const dispatch = useDispatch()

    // Update Local Storage
    localStorage.setItem('Todos', JSON.stringify(todos))

    //Handlers
    const deleteHandle = (i) => {
        dispatch({
            type: 'DELETE',
            payload: i
        })
    }
    const completeHandle = (i) => {
        dispatch({
            type: 'COMPLETE',
            payload: i
        })
    }

    return (
        <>            
            <Wrapper>
                {todos.length !== 0 ? (
                    todos.map((todo, i) => (
                        <Todo
                            key={i}
                            name={todo.text}
                            dueDate={todo.dueDate}
                            completedDate={todo.completedDate}
                            deleteHandle={() => deleteHandle(todo.id)}
                            completeHandle={() => completeHandle(todo.id)}
                        />
                    )
                )) : (
                    <EmptyTodo>You dont have any tasks</EmptyTodo>
                )}
            </Wrapper>
        </>
    )
}