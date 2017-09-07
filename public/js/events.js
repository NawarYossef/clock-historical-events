/* global $ */
/* global jQuery*/
/* global monthsNames*/ 
"use strict"
let _ = require("lodash")

let myUrl = "http://history.muffinlabs.com/date";
let proxy = 'https://cors-anywhere.herokuapp.com/';
let finalURL = proxy + myUrl;
let range = _.range(0, 30);

const monthsNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
const weeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let events = {
  postEvents: function(){
    $(document).ready(function(){
        $.ajax({ 
            type: 'GET', 
            url: finalURL,  
            dataType: 'json',
            success: function (data) { 
              range.forEach(function(idx){
                let eventYear = data["data"]["Events"][idx]["year"];
                let eventText = data["data"]["Events"][idx]["text"];
                let paragraph = $(`<li>	&#8226; ${eventYear} 	&#45; ${eventText} </li>`)
                  .css({
                    "color": "#000000",
                    "font-size" : "16px",
                    "text-align": "left",
                    "paddingLeft": "25px",
                    "paddingRight": "150px",
                    "paddingBottom": "20px",
                    "line-height": "20px"
                    
                  });
                $("ul").append(paragraph);
              })
            }
        });
      });
   }
}

module.exports = events;