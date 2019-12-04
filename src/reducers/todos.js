const initialState = {
    todos: [
        {
            text: 'Breakfast',
            dueDate: 'date',
            dateCompleted: 'date',
            completed: false,
            deleted: false
        },
        {
            text: 'Learn React',
            dueDate: 'date',
            dateCompleted: 'date',
            completed: false,
            deleted: false
        }
    ]
}

export default function todos(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}