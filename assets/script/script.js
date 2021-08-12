var timeHour8 = $("#hour-8"); // starts from 8 am
var timeHour9 = $("#hour-9");
var timeHour10 = $("#hour-10");
var timeHour11 = $("#hour-11");
var timeHour12 = $("#hour-12");
var timeHour1 = $("#hour-13");
var timeHour2 = $("#hour-14");
var timeHour3 = $("#hour-15");
var timeHour4 = $("#hour-16");
var timeHour5 = $("#hour-17");
var timeHour6 = $("#hour-18");
var timeHour7 = $("#hour-19");
var timeHour8 = $("#hour-20"); // ends at 8pm
var time = moment();

function setPlanner() {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));

  var currentTime = moment().hours();

  $(".time-block").each(function () {
    var hourRow = parseInt($(this).attr("id").split("-")[1]);

    if (hourRow < currentTime) {
      $(this).addClass("past");
    } else if (hourRow === currentTime) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  });
}

setPlanner();

var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, value);

  $(".save-alert").removeClass("hide");
  setTimeout(function () {
    $(".save-alert").addClass("hide");
  }, 3000);
});

$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
$("#hour-20 .description").val(localStorage.getItem("hour-20"));

function pastPresentFuture() {}

pastPresentFuture();
