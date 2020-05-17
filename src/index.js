import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() {
    // yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_MOVIES', fetchMovies)
    yield takeEvery('DETAILS', fetchDetails)
    yield takeEvery('UPDATE', changeDetails)
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* changeDetails(action){
    try {
        yield axios.post('/api/details', action.payload)
        yield put ({ type: 'FETCH_MOVIES'})
    }catch(err){
        console.log(err); 
    }

}// end Change details, removed the /api from this one to make sure that was just taco

function* fetchMovies(){
    try {
        let moviesResponse = yield axios.get('/api/movies');
        yield put({type: 'SET_MOVIES', payload: moviesResponse.data });
    } catch(err) {
        console.log(err);
        
    }
}
function* fetchDetails(action){
    console.log('in fetchDetails', action.payload);
    let id = action.payload.id
    try {
        let detailsResponse = yield axios.get(`/api/details/${id}`);
        yield put({ type: 'SET_GENRES', payload: detailsResponse.data });
    } catch (err) {
        console.log(err);

    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const clickedReducer = (state = [], action) => {
    console.log('in clickedReducer', action.payload);
    if (action.type === "RECORD_CLICK"){
        return action.payload
    }
return state
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        clickedReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);



// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
