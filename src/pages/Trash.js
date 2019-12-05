import React, { useEffect } from 'react'
import { Wrapper } from '../elements/Wrapper'
import { EmptyTodo } from '../elements/EmptyTodo'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'

export default function Trash() {

    const todos = useSelector(state => state.todos.filter(x => x.deleted === true))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'INDICATOR',
            payload: 'trash'
        })
    }, [dispatch])

    // Update Local Storage
    localStorage.setItem('Todos', JSON.stringify(useSelector(state => state.todos)))

    //Handlers
    const deleteHandle = (i) => {
        dispatch({
            type: 'DELETE',
            payload: {
                i: i,
                message: 'Todo permanently deleted'
            }
        })
        setTimeout(() => {
            dispatch({
                type: 'HIDE_MESSAGE',
                payload: ''
            })
        }, 2000)
    }
    const restoreHandle = (i) => {
        if(todos[0].completed === false) {
            dispatch({
                type: 'RESTORE_INCOMPLETE',
                payload: {
                    i: i,
                    message: 'Todo restored and move to pending'
                }
            })
            setTimeout(() => {
                dispatch({
                    type: 'HIDE_MESSAGE',
                    payload: ''
                })
            }, 2000)
        } else {
            dispatch({
                type: 'RESTORE_COMPLETE',
                payload: {
                    i: i,
                    message: 'Todo restored and move to completed'
                }
            })
            setTimeout(() => {
                dispatch({
                    type: 'HIDE_MESSAGE',
                    payload: ''
                })
            }, 2000)
        }
    }

    return (
        <>            
            <Wrapper>
                <h2 className="pages_headline">Trash</h2>

                <div className="bin">
                    {todos.length !== 0 ? (
                        todos.map((todo, i) => (
                            <Todo
                                key={i}
                                name={todo.text}
                                dueDate={todo.dueDate}
                                addedDate={todo.addedDate}
                                deleteHandle={() => deleteHandle(todo.id)}
                                restoreHandle={() => restoreHandle(todo.id)}
                            >
                                <p>Deleted: <span>{todo.deletedDate}</span></p>
                            </Todo>
                        )
                    )) : (
                        <EmptyTodo>You dont have any todos</EmptyTodo>
                    )}
                </div>
            </Wrapper>
        </>
    )
}