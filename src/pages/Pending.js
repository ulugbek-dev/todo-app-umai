import React, { useEffect } from 'react'
import { Wrapper } from '../elements/Wrapper'
import { EmptyTodo } from '../elements/EmptyTodo'
import Todo from '../components/Todo'
import { useSelector, useDispatch } from 'react-redux'

export default function Pending() {

    const todos = useSelector(state => state.todos.filter(x => x.completed === false && x.deleted === false))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: 'INDICATOR',
            payload: 'pending'
        })
    }, [dispatch])

    // Update Local Storage
    localStorage.setItem('Todos', JSON.stringify(useSelector(state => state.todos)))

    //Handlers
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
    const completeHandle = (i) => {
        dispatch({
            type: 'COMPLETE',
            payload: {
                i: i,
                message: 'Todo moved to completed'
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