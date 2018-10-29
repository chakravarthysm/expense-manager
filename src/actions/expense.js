import {
    SUBMIT_DAILY_EXPENSE,
} from "../constants/expense";

export const submitDailyExpenseForm = (data) => {
    return {
        type: SUBMIT_DAILY_EXPENSE,
        payload: data
    }
};