//header date
// local time
// save to local storage and save when refreshed
// time blocks for past, present, and future time
// change colors based on local time
let date = moment().formate("ddd, MM Do YYYY, h:mm:ss a")
$("#currentDay").html(date);

$(document).ready(function () {
    $(".saveBtn").on("Click", function () { 
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("16")

        localStorage.setItem(time, text);
    })
function timeTracker() {
    let $time2 = moment().formate('dddd');

    $(".time-block").each(function () {
        let block = parseFloat($(this).attr("id").split("")[1]);

        if (block < $time2) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past")
        }
        else if (block === $time2) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
}}
}

$("#9-clock.description").val(localStorage.getItem("9 AM"));
$("#9-clock.description").val(localStorage.getItem("10 AM"));
$("#9-clock.description").val(localStorage.getItem("11 AM"));
$("#9-clock.description").val(localStorage.getItem("12 AM"));
$("#9-clock.description").val(localStorage.getItem("1 PM"));
$("#9-clock.description").val(localStorage.getItem("2 PM"));
$("#9-clock.description").val(localStorage.getItem("3 PM"));
$("#9-clock.description").val(localStorage.getItem("4 PM"));
$("#9-clock.description").val(localStorage.getItem("5 PM"));