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

    timeTracker();

