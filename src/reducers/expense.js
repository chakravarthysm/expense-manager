import { SUBMIT_DAILY_EXPENSE, RENDER_SELECTED_DATE } from '../constants/expense';

export default function(state = {}, action) {
    switch(action.type) {
        case SUBMIT_DAILY_EXPENSE:
            return [
                ...state,
                ...action.payload,
            ];
        case RENDER_SELECTED_DATE:
            return [
                ...state,
                ...action.payload
            ];
        default: return state;
    }
}