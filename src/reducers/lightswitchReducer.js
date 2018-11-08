export default (state = true, action) => {
    switch (action.type) {
        case 'TOGGLE_LIGHTSWITCH':
            return !state 
    
        default:
            return state
    }
}