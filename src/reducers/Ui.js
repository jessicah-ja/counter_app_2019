import * as types from '../action/ActionTypes';

const initialState = {
    color: [255, 255, 255]
};

export default function ui(state = initialState, action) {
    if(action.type === types.SET_COLOR) {
        return {
            color: action.color
        };
    } else {
        return state;
    }
}