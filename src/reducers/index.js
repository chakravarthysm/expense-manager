import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import expenseReducer from './expense';
import calendarReducer from './calendar';

const rootReducer = combineReducers({
  form: formReducer,
  expense: expenseReducer,
  calendar: calendarReducer,
});

export default rootReducer;
