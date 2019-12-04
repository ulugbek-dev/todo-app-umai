const initialState = {
    todos: [
        {
            text: 'Test',
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