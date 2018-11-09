import { SUBMIT_DAILY_EXPENSE, FETCH_EXPENSES } from '../constants/expense';

export default function(state = {}, action) {
    switch(action.type) {
        case FETCH_EXPENSES:
            return action.payload
        default: return state;
    }
}