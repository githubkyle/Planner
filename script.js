var rootEl = $("#root");

var Currently = dayjs().hour();
$(function() {
  
  var Hourblocks = $(".time-block");

  var SaveThis = $(".btn");
  

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
