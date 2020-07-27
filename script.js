// This wraps all of our code
$(document).ready(function(){
    // this is displaying our current date 
    moment(Date);
    $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
    // Moment Current time 
    var currentTime = moment();

    // function to save task
$(".saveBtn").on("click", function(){
    var activity = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")
//this is saving tasks to our local storage 
    localStorage.setItem(time, activity);
    console.log(localStorage)
});
// checking for hours for past, present, future
function checkHour(){
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function() {
        var ourHour = parseInt($(this).attr("id").split("-")[1])
        if (ourHour < currentHour){
            $(this).children(".description").addClass("past")
            console.log("past")
        }
        else if (ourHour === currentHour){

            $(this).children(".description").removeClass("past")
            $(this).children(".description").addClass("present")
        }
        else {

            $(this).children(".description").removeClass("past")
            $(this).children(".description").removeClass("present")
            $(this).children(".description").addClass("future")
        }
    })
}
// Calling fuction at page load 
checkHour();
//setting the value from local storage 
$("#hour-9 .description").val(localStorage.getItem("hour-9"))

$("#hour-10 .description").val(localStorage.getItem("hour-10"))

$("#hour-11 .description").val(localStorage.getItem("hour-11"))

$("#hour-12 .description").val(localStorage.getItem("hour-12"))

$("#hour-13 .description").val(localStorage.getItem("hour-13"))

$("#hour-14 .description").val(localStorage.getItem("hour-14"))

$("#hour-15 .description").val(localStorage.getItem("hour-15"))

$("#hour-16 .description").val(localStorage.getItem("hour-16"))

$("#hour-17 .description").val(localStorage.getItem("hour-17"))

});
