import { combineReducers } from 'redux'
import counter from './counterReducer'
import lightswitch from './lightswitchReducer'

export default combineReducers({
    counter,
    lightswitch
})