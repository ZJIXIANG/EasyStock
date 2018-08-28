const nothing = (state = 0, action = {}) => {
    switch(action.type){
        case 'Change': return state+1
        default: return state
    }
}

export default nothing