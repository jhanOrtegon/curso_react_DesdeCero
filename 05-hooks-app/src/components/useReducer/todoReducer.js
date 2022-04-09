export const todoReducer = (state = [], action)=>{
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'remove':
            return state.filter(e => e.id !== action.payload.id)
        case 'completed':
            return state.map((e)=>e.id === action.payload.id ? {...e,done: !e.done}: e)
        default:
            return state;
    }
}