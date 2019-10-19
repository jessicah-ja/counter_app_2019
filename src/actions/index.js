//action 생성자 파일
import * as types from './ActionTypes';  // 또는 import { INCREMENT, DECREMENT, SET_COLOR } from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    };
}