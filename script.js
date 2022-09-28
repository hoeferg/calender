//header date
// local time
// save to local storage and save when refreshed
// time blocks for past, present, and future time
// change colors based on local time
let date = moment().format("MM Do YYYY");

$("#currentDay").text(date);

let time = moment().format("h:mm:ss");
console.log(date);

$(document).ready(function () { 
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("9")
        localStorage.setItem("time", "text");}
    )
})
    function timeTracker() {
        let $time2 = moment().formate('dddd');

        $(".time-block").each(function () {
            let block = parseFloat($(this).attr("id").split("")[1]);

            if (block < $time2) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
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
        })
    }

    $("#9-clock.description").val(localStorage.getItem("9 AM"));
    $("#10-clock.description").val(localStorage.getItem("10 AM"));
    $("#11-clock.description").val(localStorage.getItem("11 AM"));
    $("#12-clock.description").val(localStorage.getItem("12 AM"));
    $("#1-clock.description").val(localStorage.getItem("1 PM"));
    $("#2-clock.description").val(localStorage.getItem("2 PM"));
    $("#3-clock.description").val(localStorage.getItem("3 PM"));
    $("#4-clock.description").val(localStorage.getItem("4 PM"));
    $("#5-clock.description").val(localStorage.getItem("5 PM"));

    $("#9-clock.description").val(localStorage.setItem("9 AM"));
    $("#10-clock.description").val(localStorage.setItem("10 AM"));
    $("#11-clock.description").val(localStorage.setItem("11 AM"));
    $("#12-clock.description").val(localStorage.setItem("12 AM"));
    $("#1-clock.description").val(localStorage.setItem("1 PM"));
    $("#2-clock.description").val(localStorage.setItem("2 PM"));
    $("#3-clock.description").val(localStorage.setItem("3 PM"));
    $("#4-clock.description").val(localStorage.setItem("4 PM"));
    $("#5-clock.description").val(localStorage.setItem("5 PM"));
    $timeTracker();

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist