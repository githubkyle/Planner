var rootEl = $("#root");

var Currently = dayjs().hour();
$(function() {
  // $(rootEl).children("div").id('hour-');
  var Hourblocks = $(".time-block");

  var SaveThis = $(".btn");
  // var 7am = $('input[id="hour-7"]').val();
  // var 8am = $('input[id="hour-8"]').val();
  // var 9am = $('input[id="hour-9"]').val();
  // var 10am = $('input[id="hour-10"]').val();
  // var 11am = $('input[id="hour-11"]').val();
  // var 12pm = $('input[id="hour-12"]').val();
  // var 1pm = $('input[id="hour-13"]').val();
  // var 2pm = $('input[id="hour-14"]').val();
  // var 3pm = $('input[id="hour-15"]').val();
  // var 4pm = $('input[id="hour-16"]').val();
  // var 5pm = $('input[id="hour-17"]').val();
  // var 6pm = $('input[id="hour-18"]').val();

  // var Seven = document.getElementById("hour-7");
  // var Eight = document.getElementById("hour-8");
  // var Nine = document.getElementById("hour-9");
  // var Ten = document.getElementById("hour-10");
  // var Eleven = document.getElementById("hour-11");
  // var Twelve = document.getElementById("hour-12");
  // var Thirteen = document.getElementById("hour-13");
  // var Fourteen = document.getElementById("hour-14");
  // var Fifteen = document.getElementById("hour-15");
  // var Sixteen = document.getElementById("hour-16");
  // var Seventeen = document.getElementById("hour-17");
  // var Eightteen = document.getElementById("hour-18");
  // var AllTimes = document.getElementsByClassName("time-block");

  Hourblocks.each(function() {
    console.log(this);
    if (this.dataset.hour > Currently) {
      this.classList.add("future");
    } else if (this.dataset.hour < Currently) {
      this.classList.add("past");
    } else {
      this.classList.add("present");
    }
  });

  $("#hour-7 textarea").val(localStorage.getItem("hour-7"));
  $("#hour-8 textarea").val(localStorage.getItem("hour-8"));
  $("#hour-9 textarea").val(localStorage.getItem("hour-9"));
  $("#hour-10 textarea").val(localStorage.getItem("hour-10"));
  $("#hour-11 textarea").val(localStorage.getItem("hour-11"));
  $("#hour-12 textarea").val(localStorage.getItem("hour-12"));
  $("#hour-13 textarea").val(localStorage.getItem("hour-13"));
  $("#hour-14 textarea").val(localStorage.getItem("hour-14"));
  $("#hour-15 textarea").val(localStorage.getItem("hour-15"));
  $("#hour-16 textarea").val(localStorage.getItem("hour-16"));
  $("#hour-17 textarea").val(localStorage.getItem("hour-17"));
  $("#hour-18 textarea").val(localStorage.getItem("hour-18"));

  function Saving() {
    localStorage.setItem(
      this.parentElement.id,
      this.parentElement.querySelector("textarea").value
    );
  }

  SaveThis.on("click", Saving);
});

var DayDisplay = dayjs().format("MMM D, YYYY");
$("#currentDay").text(DayDisplay);
console.log(DayDisplay);
