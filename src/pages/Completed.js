import React, { useEffect } from 'react'
import { Wrapper } from '../elements/Wrapper'
import { EmptyTodo } from '../elements/EmptyTodo'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'

export default function Completed() {

    const todos = useSelector(state => state.todos.filter(x => x.completed === true && x.deleted === false))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'INDICATOR',
            payload: 'complete'
        })
    }, [dispatch])

    // Update Local Storage
    localStorage.setItem('Todos', JSON.stringify(useSelector(state => state.todos)))

    //Handlers
    const incompleteHandle = (i) => {
        dispatch({
            type: 'INCOMPLETE',
            payload: {
                i: i,
                message: 'Todo moved to pending'
            }
        })
        setTimeout(() => {
            dispatch({
                type: 'HIDE_MESSAGE',
                payload: ''
            })
        }, 2000)
    }
    const deleteHandle = (i) => {
        dispatch({
            type: 'MOVE_TO_TRASH',
            payload: {
                i: i,
                message: 'Todo moved to trash'
            }
        })
        setTimeout(() => {
            dispatch({
                type: 'HIDE_MESSAGE',
                payload: ''
            })
        }, 2000)
    }

    return (
        <>            
            <Wrapper>
                <h2 className="pages_headline">Completed Todos</h2>
                <div className="completed">
                    {todos.length !== 0 ? (
                        todos.map((todo, i) => (
                            <Todo
                                key={i}
                                name={todo.text}
                                addedDate={todo.addedDate}
                                dueDate={todo.dueDate}
                                deleteHandle={() => deleteHandle(todo.id)}
                                incompleteHandle={() => incompleteHandle(todo.id)}
                            >
                                <p>Completed: <span>{todo.completedDate}</span></p>
                            </Todo>
                        )
                    )) : (
                        <EmptyTodo>You haven't completed any todos</EmptyTodo>
                    )}
                </div>
            </Wrapper>
        </>
    )
}