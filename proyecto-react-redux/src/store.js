import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const INCREMENT = 'INCREMENT';
const SET_LOADING = 'SET_LOADING';
const SET_USER = 'SET_USER';

export function increment(){
    return { type: INCREMENT}
}

export function incrementAsync(){
    return (dispatch) => {
        dispatch({ type: SET_LOADING, value: true })
        setTimeout(()=>{
            dispatch(increment())
            dispatch({ type: SET_LOADING, value: false })
        }, 5500)
    };
}

export function fetchUser(id){
    return (dispatch) => {
        dispatch({ type: SET_LOADING, value: true})        
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) =>{
                dispatch({ type: SET_USER, value: response.data })
                dispatch({ type: SET_LOADING, value: false })
        })
    }
}

const defaultState = {
    count: 0,
    isLoading: false,
    user: undefined,
}

function reducer (state = defaultState, action) {
    switch (action.type) {
        case INCREMENT: 
            return { ...state, count: state.count + 1 }
        case SET_LOADING: 
            return { ...state, isLoading: action.value }   
        case SET_USER:
            return { ...state, user: action.value }
        default:
             return state
    }
}

const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(reduxThunk))
    );

export default store;