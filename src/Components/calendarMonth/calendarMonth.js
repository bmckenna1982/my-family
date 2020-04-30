import React, { Component } from 'react'
import Header from '../header/header'
import moment from 'moment'
import './calendarMonth.css'


class CalendarMonth extends Component {
  render() {
    console.log('month')
    const weekdayShort = moment.weekdaysShort()
    let dateObject = moment([]);

    let weekdayShortName = weekdayShort.map(day => {
      return (
        <div key={day} className='week-day table-header'>
          {day}
        </div>
      )
    })

    const firstDayOfMonth = () => {
      let firstDay = moment(dateObject)
        .startOf("month")
        .format("d");
      return firstDay;
    }

    const lastDayOfMonth = () => {
      let dateObject = moment([])
      let lastDay = moment(dateObject)
        .endOf('month')
        .format('d')
      return lastDay
    }

    let startBlanks = []
    for (let i = 0; i < firstDayOfMonth(); i++) {
      startBlanks.push(
        <div key={`start-blank${i}`} className='calendar-month-day empty'>{''}</div>
      )
    }

    let endBlanks = []
    for (let i = 0; i < 7 - lastDayOfMonth(); i++) {
      endBlanks.push(
        <div key={`end-blank${i}`} className='calendar-month-day empty'>{''}</div>
      )
    }

    const getCurrentDay = () => {
      return moment(dateObject).format("D");
    };

    const currentMonth = moment([]).format('MMMM')
    const daysInMonth = []
    for (let d = 1; d < moment().daysInMonth(currentMonth); d++) {
      let currentDay = d == getCurrentDay() ? "today" : "";
      daysInMonth.push(
        <div key={d} className={`calendar-month-day ${currentDay}`}>
          {d}
        </div>
      )
    }

    let totalSlots = [...startBlanks, ...daysInMonth, ...endBlanks];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {

      if (i === 0 || i % 7 !== 0) { // if index not equal 7 that means dont go to next week

        cells.push(row)
      } else {

        rows.push(cells) // when reach next week contain all td in last week to rows
        cells = []
        cells.push(row)// in current loop still push current row to new container
      }
      if (i === totalSlots.length - 1) { // when end loop we add remain date
        rows.push(cells)
      }
    })
    let daysinmonth = rows.map((d, i) => {
      return <div className='calendar-row' key={i}>{d}</div>
    })


    console.log('weekdayShortName', weekdayShortName)
    return (
      <div className='calendar-page-month calendar-close' id='month' >
        {/* <Header pageTitle='Calendar' /> */}
        <div className='calendar-month-view'>
          <div className='calendar-header-container'> {weekdayShortName} </div>
          <div className='calendar-body' >{daysinmonth}</div>
        </div>
      </div>
    )
  }
}


export default CalendarMonth