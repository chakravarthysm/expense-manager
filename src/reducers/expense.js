import { SUBMIT_DAILY_EXPENSE } from '../constants/expense';

export default function(state = [], action) {
    switch(action.type) {
        case SUBMIT_DAILY_EXPENSE:
            return [
                ...state,
                ...action.payload,
            ];
        default: return state;
    }
}