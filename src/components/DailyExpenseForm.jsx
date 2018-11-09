import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
    ExpenseActions, 
    CalendarActions,
} from '../actions';

import dateFns, { format as humanizeDate } from "date-fns";
import Calendar from './Calender';


class DailyExpenseForm extends Component {

    constructor() {
        super();
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date()
        };
        this.saveExpense  =this.saveExpense.bind(this);
        this.renderExpenses = this.renderExpenses.bind(this);
    }

    componentWillMount() {
        this.props.expenseActions.fetchExpenses();
    }

    renderExpenses() {
        return JSON.stringify(this.props.expense)
    }

    onDateClick = userSelectedDate => {
        const { calendarActions } = this.props;
        this.setState({
          selectedDate: userSelectedDate,
        });
        calendarActions.renderSelectedDate(userSelectedDate);
      };
    
    nextMonth = () => {
        this.setState({
          currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
      };
    
    prevMonth = () => {
        this.setState({
          currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
      };
    
    saveExpense(data) {
        const { expenseActions } = this.props;
        data.selectedDate = this.state.selectedDate;
        return expenseActions.submitDailyExpenseForm(data);
    }

    componentDidMount() {
        const { calendarActions } = this.props;
        return calendarActions.renderSelectedDate(this.state.selectedDate);
    }

    render() {
        const { handleSubmit, reset, calendar: { selectedDate } } = this.props;
        return ( 
            <div>
                <div className="daily-expense-form">
                    <div className="form-header">
                        <h1>Expense Form</h1>
                    </div>
                    <div className="row">
                        <form onSubmit={handleSubmit(this.saveExpense)}>
                            <div className="form-group col-md-12">
                                <Field 
                                    name="amountFor"
                                    component="input"
                                    type="text"
                                    placeholder="What was this spend for?"
                                    className="form-control rounded"
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <Field 
                                    name="amountValue"
                                    component="input"
                                    type="number"
                                    placeholder="Enter the amount"
                                    className="form-control rounded"
                                />
                            </div>
                            <div className="form-group col-md-2 col-sm-6 col-xs-12">
                                <button type="submit" className="btn btn-primary button">Submit</button>
                            </div>
                            <div className="form-group col-md-2 col-sm-6 col-xs-12" onClick={reset}>
                                <button type="submit" className="btn btn-warning button">Clear Values</button>
                            </div>
                            <div className="form-group col-md-6">
                                <strong>{selectedDate ? humanizeDate(selectedDate, '[Selected date is] Do of MMMM, YYYY') : 'Please choose a date !'}</strong>
                            </div>
                            <div>
                                {this.renderExpenses()}
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <Calendar 
                        nextMonth={this.nextMonth.bind(this)} 
                        prevMonth={this.prevMonth.bind(this)} 
                        onDateClick={this.onDateClick.bind(this)}
                        currentMonth={this.state.currentMonth}
                        selectedDate={this.state.selectedDate}
                    />
                </div>
            </div>
        );
    }
}

const dailyExpenseForm = reduxForm({
    form: 'dailyExpenseForm',
})(DailyExpenseForm);

function mapDispatchToProps(dispatch) {
    return {
        expenseActions: bindActionCreators(ExpenseActions, dispatch),
        calendarActions: bindActionCreators(CalendarActions, dispatch),
    };
}

function mapStateToProps({ expense, calendar }) {
    return { expense, calendar };
}

export default connect(mapStateToProps, mapDispatchToProps)(dailyExpenseForm);