// @flow
import { SUBMIT_HOST } from '../actions';

const submitHost = (state : Object = {}, action : any) => {
    switch (action.type) {
        case SUBMIT_HOST:
            return {...state, data: action.payload };
        default:
            return state;
    }
};

export default submitHost;