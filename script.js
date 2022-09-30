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
        let time = $(this).parent().attr("id")
        localStorage.setItem(time, text);
        console.log(text)
        console.log(time)
    }
    )
})
    function timeTracker() {
        let $time2 = parseInt(moment().hour());

        $(".time-block").each(function () {
            let block = parseInt($(this).attr("id"));
            console.log($time2)
            console.log(block)
            if (block < $time2) {
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

    $("#9-clock .description").val(localStorage.getItem("9-clock"));
    $("#10-clock .description").val(localStorage.getItem("10-clock"));
    $("#11-clock .description").val(localStorage.getItem("11-clock"));
    $("#12-clock .description").val(localStorage.getItem("12-clock"));
    $("#13-clock .description").val(localStorage.getItem("13-clock"));
    $("#14-clock .description").val(localStorage.getItem("14-clock"));
    $("#15-clock .description").val(localStorage.getItem("15-clock"));
    $("#16-clock .description").val(localStorage.getItem("16-clock"));
    $("#17-clock .description").val(localStorage.getItem("17-clock"));

    // $("#9-clock.description").val(localStorage.setItem("9 AM"));
    // $("#10-clock.description").val(localStorage.setItem("10 AM"));
    // $("#11-clock.description").val(localStorage.setItem("11 AM"));
    // $("#12-clock.description").val(localStorage.setItem("12 AM"));
    // $("#1-clock.description").val(localStorage.setItem("1 PM"));
    // $("#2-clock.description").val(localStorage.setItem("2 PM"));
    // $("#3-clock.description").val(localStorage.setItem("3 PM"));
    // $("#4-clock.description").val(localStorage.setItem("4 PM"));
    // $("#5-clock.description").val(localStorage.setItem("5 PM"));

    // use the above to save what was put in calender. Need to create a function that when the save button is hit, it saves the information and displays the information.
    timeTracker();

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