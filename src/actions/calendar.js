import { SELECT_DATE } from '../constants/calendar';

export const renderSelectedDate = (data) => {
    return {
        type: SELECT_DATE,
        payload: data
    };
}