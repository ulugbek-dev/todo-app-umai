import React, { useEffect } from 'react'
import { Wrapper } from '../elements/Wrapper'
import { EmptyTodo } from '../elements/EmptyTodo'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'

export default function Completed() {

    useEffect(() => {
        dispatch({
            type: 'INDICATOR',
            payload: 'complete'
        })
    }, [])

    const todos = useSelector(state => state.todos.filter(x => x.completed === true))
    const dispatch = useDispatch()

    // Update Local Storage
    localStorage.setItem('Todos', JSON.stringify(todos))

    //Handlers
    const incompleteHandle = (i) => {
        dispatch({
            type: 'INCOMPLETE',
            payload: i
        })
    }
    const deleteHandle = (i) => {
        dispatch({
            type: 'DELETE',
            payload: i
        })
    }

    console.log(todos)

    return (
        <>            
            <Wrapper>
                <div className="completed">
                    {todos.length !== 0 ? (
                        todos.map((todo, i) => (
                            <Todo
                                key={i}
                                name={todo.text}
                                dueDate={todo.dueDate}
                                deleteHandle={() => deleteHandle(todo.id)}
                                incompleteHandle={() => incompleteHandle(todo.id)}
                            >
                                <p>Completed: <span>{todo.completedDate}</span></p>
                            </Todo>
                        )
                    )) : (
                        <EmptyTodo>You haven's completed any tasks</EmptyTodo>
                    )}
                </div>
            </Wrapper>
        </>
    )
}