import {
    SUBMIT_DAILY_EXPENSE,
} from "../constants/expense";

export const submitDailyExpenseForm = (data) => {
    console.log('in action creator: ' + JSON.stringify(data));
    return {
        type: SUBMIT_DAILY_EXPENSE,
        payload: data
    }
};