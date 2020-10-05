$(document).ready(function() {

var currDt = moment().format('LLLL');
var currentHr = parseInt(moment().format('h'));
var timeBlockEl = $(".time-block");
var workStartHr = 9;
var workEndHr = 17;
var col1El = $("#col-1");
var col2El = $("#col-2");
var col3El = $("#col-3");
var currentDayEl = $("<span>");
var currentId;

currentDayEl.addClass("comment");
currentDayEl.text(moment().format('LLLL'));

 console.log(currentHr);

 $("#currentDay").append(currentDayEl);

        for (i=workStartHr; i <= workEndHr;i++) {
            // var timeP = $("<p>");
            var strHr = i + ":00";
            // var descP = $("<p>");
            var newRow = $("<div>");
            // var newDiv = $("<div>");
            var newCol = $("<div>")
            var newCol1 = $("<textarea>");
            var newCol2 = $("<div>");
            var inputEl = $("<div>")
            var saveButton = $("<button>");
            var pEl = $("<p>");

            
            saveButton.addClass("btn saveBtn i")
            saveButton.attr("type","button");
            saveButton.text("Save");
         
            newRow.addClass("row");
            newRow.attr("id",i);
            newCol1.attr("data-index",i);
            newCol.addClass("col-2 hour");
            newCol.text(strHr);
            newRow.append(newCol);

            newCol1.addClass("col-7 row");
            
            // pEl.addClass("pt-4");
            pEl.text("Save");


            newCol2.addClass("col-2 p-0 row");
            newCol2.attr("id",i);
            newCol2.append(saveButton);

            
            timeBlockEl.append(newRow);
            newRow.append(newCol1);
            newRow.append(newCol2);

            // console.log("current hour is " + currentHr);
            // console.log("current i is :" + i);


      

        // apply style to respective text area based on where or not time has past
            if (i > parseInt(currentHr)){
                $("textarea[data-index='" + i + "']").addClass("future");
                 
            }
            else if (i == parseInt(currentHr)) {
                $("textarea[data-index='" + i + "']").addClass("present");
            }

            else {  $("textarea[data-index='" + i + "']").addClass("past");
        }
       
            


        }
function updateTime() {

}    
// save button event listener
$("button").on("click", function(event) {
    event.preventDefault();

   // var target = event.target
    var whichRowAmI = $('textarea').prev();

    console.log(whichRowAmI);
    console.log("you clicked a button");
    currentId = event.target.parentElement.id
    console.log(currentId);

    var hrTask = $("[data-index=" + currentId + "]").val();
     

    console.log(hrTask);

})

});


// save textarea data to localstorage
function saveSchedule () {

}