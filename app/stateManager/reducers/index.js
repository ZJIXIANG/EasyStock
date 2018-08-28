import { combineReducers} from 'redux'

import grouping from './grouping.js'
import nothing from './nothing'

const rootReducer = combineReducers({
    grouping,
    nothing,
})

export default rootReducer