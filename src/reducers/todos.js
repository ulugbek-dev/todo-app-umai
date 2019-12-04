import { date } from './../components/Date'

const initialState = {
    todos: localStorage.getItem('Todos') === null ? (
        []
    ) : (
        JSON.parse(localStorage.getItem('Todos'))
    ),
    indicator: []
}

export default function todos(state = initialState, { type, payload }) {
    switch(type) {
        case 'ADD':
            return {
                ...state,
                todos: [...state.todos, { ...payload }],
                indicator: [...state.indicator, 'pending']
            }
        case 'COMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload ? {...todo, completed: !todo.completed, completedDate: date()} : todo),
                indicator: [...state.indicator, 'complete']
            }
        case 'INCOMPLETE':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload ? {...todo, completed: !todo.completed} : todo),
                indicator: [...state.indicator, 'pending']
            }
        case 'MOVE_TO_TRASH':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload ? {...todo, deleted: !todo.deleted} : todo)
            }
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        case 'EDIT':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload ? {...todo, text: payload}: todo)
            }
        case 'INDICATOR':
            return {
                ...state,
                indicator: state.indicator.filter(x => x !== payload)
            }
        default:
            return state
    }
}