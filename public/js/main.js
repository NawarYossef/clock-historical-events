/* global $ */
"use strict";


let toggle = require("./toggle.js");
let events = require("./events.js");

const weeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];



class Time  {

  setTime() {
    this.minutesDisplay();
    this.secondsDisplay();
    this.dayOfWeekDisplay();
    this.monthDisplay();
    this.dayOfMonthDisplay();
    this.getAmPm();
  }

  buttonControl() {
    toggle.imageChange();
    toggle.fontChange();
    toggle.secondsToggle();
    toggle.amPmToggle();
    toggle.hoursToggle();
    toggle.dateToggle();
  }

  historicalEvents() {
    events.postEvents();
  }

  init() {
    setInterval(
      function() {
        this.buttonControl();
        this.setTime();
      }.bind(this), 1000);
  }


  minutesDisplay() {
    $(document).ready(function(){
      let minutes = new Date().getMinutes();
      minutes < 10 ? $("#minutes").text('0' + minutes) : $("#minutes").text(minutes);
    });
  }

  secondsDisplay() {
    $(document).ready(function(){
      let seconds = new Date().getSeconds();
      seconds < 10 ? $("#seconds").text('0' + seconds) : $("#seconds").text(seconds);

    });
  }

  getAmPm() {
    let timeValues = [];
    $(document).ready(function(){
      let localTime = new Date().toLocaleTimeString().split("");
      timeValues.push(localTime[localTime.length - 2]);
      timeValues.push(localTime[localTime.length - 1]);
    });
    this.amPmDisplay(timeValues);
  }

  amPmDisplay(time) {
    $(document).ready(function(){
      $("#am-pm").text(time.join(""));
    });
  }

  dayOfWeekDisplay() {
    $(document).ready(function(){
      let day = weeekDays[new Date().getDay()];
      $("#day-of-week").text(day + " - ");
    });
  }

  monthDisplay() {
    $(document).ready(function(){
      let month = monthsNames[new Date().getMonth()];
      $("#month").text(month);
      $("#month").prepend('&nbsp;');
    });
  }

  dayOfMonthDisplay() {
    $(document).ready(function(){
      let dayOfMonth = new Date().getDate();
      dayOfMonth < 10 ? $("#day-of-month").text('0' + dayOfMonth) : $("#day-of-month").text(dayOfMonth);
      $("#day-of-month").prepend('&nbsp;');
    });
  }
}

let app = new Time();
app.init();
app.historicalEvents()










