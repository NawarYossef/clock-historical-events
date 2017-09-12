/* global $ */
/*global Events*/
"use strict"


let toggleData = {

  imageChange: function(){
                $(document).ready(function(){
                  let imgTitle = $("select > option").filter(":selected").text();
                  $("body").css("background-image", "url(images/" + imgTitle + "-min" + ".jpg)");
                });
  },

  fontChange: function() {
                $(document).ready(function(){
                  let imgTitle = $("select > option").filter(":selected").text()
                  if (imgTitle === "texture") {
                    $("#hours, #minutes, #am-pm, #seconds, #month-date, #day-of-week, #month, #day-of-month").css({"color": "#190f0b", "font-family": "Cambria"})
                  } else if (imgTitle === "space") {
                      $("#hours, #minutes, #am-pm, #seconds, #month-date, #day-of-week, #month, #day-of-month").css({"color": "#281e4c", "font-family": "Microsoft YaHei"})
                  } else if (imgTitle === "shore") {
                      $("#hours, #minutes, #am-pm, #seconds, #month-date, #day-of-week, #month, #day-of-month").css({"color": "#a86605", "font-family": "Trebuchet MS" })
                  } else if (imgTitle === "landscape") {
                      $("#hours, #minutes, #am-pm, #seconds, #month-date, #day-of-week, #month, #day-of-month").css({"color": "#211f1e", "font-family": "Trebuchet MS" })
                  }
                })
  },

  secondsToggle: function() {
    $(document).ready(function(){
      $(".seconds").prop('checked') ? $("#seconds").show('fast') : $("#seconds").hide('fast');
    });
  },

  amPmToggle: function() {
    $(document).ready(function(){
      $(".am-pm").prop('checked') ? $("#am-pm").show("fast") : $("#am-pm").hide("fast");
    });
  },

  hoursToggle: function() {
                let that = this; // bind .this to Toggle class
                $(document).ready(function(){
                  $(".12-hour").prop('checked') ? that.twelveHourTime() : that.militaryTime();
                });
  },

  twelveHourTime: function(){
                    let hours = new Date().getHours();
                    hours > 12 ? hours = hours - 12 : null;
                    if (hours === 0) {
                        this.hoursDisplay(12);
                      } else {
                        this.hoursDisplay(hours);
                      }
  },

  hoursDisplay: function(currentHour) {
                  $(document).ready(function(){
                    currentHour < 10 && currentHour >= 1 ? $("#hours").text('0' + currentHour + ":") : $("#hours").text(currentHour + ":");
                  });
  },

  militaryTime: function() {
                  $(document).ready(function(){
                    let hours = new Date().getHours();
                    hours < 10 ?  $("#hours").text('0' + hours + ":") : $("#hours").text(hours + ":");
                  });
  },

  dateToggle: function() {
                $(document).ready(function(){
                  $(".date").prop('checked') ? $("#month, #day-of-month, #day-of-week").show() : $("#month, #day-of-month, #day-of-week").hide();
                });
              }

}


module.exports = toggleData;