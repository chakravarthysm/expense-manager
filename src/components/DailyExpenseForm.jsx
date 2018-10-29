import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ExpenseActions } from '../actions';


class DailyExpenseForm extends Component {

    constructor() {
        super();
        this.state = {};
        this.saveExpense  =this.saveExpense.bind(this);
    }
    
    saveExpense(data) {
        const { expenseActions } = this.props;
        return expenseActions.submitDailyExpenseForm(data);
    }

    render() {
        const { handleSubmit, reset } = this.props;
        return ( 
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
                    </form>
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
        expenseActions: bindActionCreators(ExpenseActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(dailyExpenseForm);