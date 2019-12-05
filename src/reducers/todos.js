import { date } from './../components/Date'

const initialState = {
    todos: localStorage.getItem('Todos') === null ? (
        []
    ) : (
        JSON.parse(localStorage.getItem('Todos'))
    ),
    indicator: [],
    message: {}
}

export default function todos(state = initialState, { type, payload }) {
    switch(type) {
        case 'ADD':
            return {
                ...state,
                todos: [...state.todos, { ...payload.todo }],
                indicator: [...state.indicator, 'pending'],
                message: {...state.message, text: payload.message, className: 'show'}
            }
        case 'COMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload.i ? {...todo, completed: !todo.completed, completedDate: date()} : todo),
                indicator: [...state.indicator, 'complete'],
                message: {...state.message, text: payload.message, className: 'show'}
            }
        case 'INCOMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload.i ? {...todo, completed: !todo.completed} : todo),
                indicator: [...state.indicator, 'pending'],
                message: {...state.message, text: payload.message, className: 'show'}
            }
        case 'MOVE_TO_TRASH':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload.i ? {...todo, deleted: !todo.deleted, deletedDate: date()} : todo),
                indicator: [...state.indicator, 'trash'],
                message: {...state.message, text: payload.message, className: 'show'}
            }
        case 'RESTORE_INCOMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload.i ? {...todo, deleted: !todo.deleted} : todo),
                indicator: [...state.indicator, 'pending'],
                message: {...state.message, text: payload.message, className: 'show'}
            }
        case 'RESTORE_COMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload.i ? {...todo, deleted: !todo.deleted} : todo),
                indicator: [...state.indicator, 'complete'],
                message: {...state.message, text: payload.message, className: 'show'}
            }
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload.i),
                message: {...state.message, text: payload.message, className: 'show'}
            }
        case 'EDIT':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload.todo.id ? {...todo, text: payload.todo.text, dueDate: payload.todo.dueDate}: todo),
                message: {...state.message, text: payload.message, className: 'show'}
            }
        case 'INDICATOR':
            return {
                ...state,
                indicator: state.indicator.filter(x => x !== payload)
            }
        case 'HIDE_MESSAGE':
            return {
                ...state,
                message: {...state.message, className: ''}
            }
        default:
            return state
    }
}