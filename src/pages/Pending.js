import React, { useEffect } from 'react'
import { Wrapper } from '../elements/Wrapper'
import { EmptyTodo } from '../elements/EmptyTodo'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'

export default function Pending() {

    // Hooks
    const todos = useSelector(state => state.todos.filter(x => x.completed === false && x.deleted === false))
    const dispatch = useDispatch()

    // Remove indicator
    useEffect(() => {
        dispatch({
            type: 'INDICATOR',
            payload: 'pending'
        })
    }, [dispatch])

    //Handlers
    const deleteHandle = (i) => {
        dispatch({
            type: 'MOVE_TO_TRASH',
            payload: {
                i: i,
                message: 'Todo moved to trash'
            }
        })
    }
    const completeHandle = (i) => {
        dispatch({
            type: 'COMPLETE',
            payload: {
                i: i,
                message: 'Todo moved to completed'
            }
        })
    }

    return (
        <>            
            <Wrapper>
                <h2 className="pages_headline">Pending Todos</h2>

                {todos.length !== 0 ? (
                    todos.map((todo, i) => (
                        <Todo
                            key={i}
                            id={todo.id}
                            name={todo.text}
                            dueDate={todo.dueDate}
                            addedDate={todo.addedDate}
                            deleteHandle={() => deleteHandle(todo.id)}
                            completeHandle={() => completeHandle(todo.id)}
                        />
                    )
                )) : (
                    <EmptyTodo>You dont have any todos</EmptyTodo>
                )}
            </Wrapper>
        </>
    )
}