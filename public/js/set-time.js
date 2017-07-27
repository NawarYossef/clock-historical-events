/* global $ */
"use strict";

const weeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];



class Time extends Toggle  {

  setTime() {
    this.minutesDisplay();
    this.secondsDisplay();
    this.dayOfWeekDisplay();
    this.monthDisplay();
    this.dayOfMonthDisplay();
    this.getAmPm();
  }

  toggle() {
    this.imageChange();
    this.fontChange();
    this.secondsToggle();
    this.amPmToggle();
    this.hoursToggle();
    this.dateToggle();
  }

  events() {
    this.getData();
    this.postData();
  }

  init() {
    this.events();
    setInterval(
      function() {
        this.toggle();
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




