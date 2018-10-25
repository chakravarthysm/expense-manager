import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import expenseReducer from './expense';

const rootReducer = combineReducers({
  form: formReducer,
  expense: expenseReducer
});

export default rootReducer;
