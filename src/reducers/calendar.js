import { SELECT_DATE } from '../constants/calendar';

const initialState  = {
 selectedDate: null,
 error: false,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SELECT_DATE:
            return {
                ...state,
                selectedDate: action.payload,
            };
        default: return state;
    }
}