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
            <div className="row" style={{ margin: 10 }}>
                <form onSubmit={handleSubmit(this.saveExpense)}>
                    <div className="form-group col-md-12">
                        <Field 
                            name="amountFor"
                            component="input"
                            type="text"
                            placeholder="What was this spend for?"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group col-md-12">
                        <Field 
                            name="amountValue"
                            component="input"
                            type="number"
                            placeholder="Enter the amount"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group col-md-1">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                    <div className="form-group col-md-1" onClick={reset}>
                        <button type="submit" className="btn btn-default">Clear Values</button>
                    </div>
                </form>
            </div>
        );
    }
}

const dailyExpenseForm = reduxForm({
    form: 'dailyExpenseForm'
})(DailyExpenseForm);

function mapDispatchToProps(dispatch) {
    return {
        expenseActions: bindActionCreators(ExpenseActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(dailyExpenseForm);