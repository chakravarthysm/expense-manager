import React, { Component } from 'react';
import DailyExpenseForm from './DailyExpenseForm';
import Calendar from './Calender';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <DailyExpenseForm />
        </div>
        <div className="col-md-12">
          <Calendar />
        </div>
      </div>
    );
  }
}