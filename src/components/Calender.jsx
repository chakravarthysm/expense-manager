import React from "react";
import dateFns from "date-fns";

class Calendar extends React.Component {

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row-calendar flex-middle">
        <div className="col-calendar col-start">
          <div className="icon" onClick={this.props.prevMonth}>
            <button type="button" className="btn btn-default btn-sm">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="col-calendar col-center">
          <span>{dateFns.format(this.props.currentMonth, dateFormat)}</span>
        </div>
        <div className="col-calendar col-end" onClick={this.props.nextMonth}>
            <div className="icon">
            <button type="button" className="btn btn-default btn-sm">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.props.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col-calendar col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row-calendar">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.props;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col-calendar cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
            onClick={() => this.props.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row-calendar" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;