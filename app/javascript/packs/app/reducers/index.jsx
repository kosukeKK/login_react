import {combineReducers} from 'redux';

let initialState = {id:  0, text: 'first'};

const sample = (state=initialState, action) => {
    switch (action.type) {
        case 'SAMPLE':
            return {id: action.id, text: action.text};
        default:
            return state;
    }
};

export const reducers = combineReducers({sample});


