import React, { useEffect } from 'react'
import { Wrapper } from '../elements/Wrapper'
import { EmptyTodo } from '../elements/EmptyTodo'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'

export default function Trash() {

    // Hooks
    const todos = useSelector(state => state.todos.filter(x => x.deleted === true))
    const dispatch = useDispatch()

    // Remove indicator
    useEffect(() => {
        dispatch({
            type: 'INDICATOR',
            payload: 'trash'
        })
    }, [dispatch])

    //Handlers
    const deleteHandle = (i) => {
        dispatch({
            type: 'DELETE',
            payload: {
                i: i,
                message: 'Todo permanently deleted'
            }
        })
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
        } else {
            dispatch({
                type: 'RESTORE_COMPLETE',
                payload: {
                    i: i,
                    message: 'Todo restored and move to completed'
                }
            })
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
                        <EmptyTodo>Trash is empty</EmptyTodo>
                    )}
                </div>
            </Wrapper>
        </>
    )
}