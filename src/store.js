import {createStore, combineReducers, compose} from 'redux'
import reducers from './reducers'

const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const enhancer = compose(
	devTools
)

const store = createStore(reducer, enhancer)

export default store