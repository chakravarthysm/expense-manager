import {
    FETCH_EXPENSES,
} from "../constants/expense";

import { database } from "../Firebase";

export const submitDailyExpenseForm = (data) => {
    return dispatch => database.push(data);
};

export const fetchExpenses = () => {
    console.log(database);
    return dispatch => {
        database.on('value', data => {
            dispatch({
                type: FETCH_EXPENSES,
                payload: data.val()
            });
        });
    }
};