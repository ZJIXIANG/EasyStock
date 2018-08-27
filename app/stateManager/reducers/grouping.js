const grouping = (state = 0, action = {}) => {
    switch(action.type){
        case 'Change': return state+1
        default: return state
    }
}

export default grouping