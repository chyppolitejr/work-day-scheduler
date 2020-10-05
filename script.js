$(document).ready(function() {

var currDt = moment().format('LLLL');
var currentHr = 11//parseInt(moment().format('h'));
var timeBlockEl = $(".time-block");
var workStartHr = 9;
var workEndHr = 17;
var col1El = $("#col-1");
var col2El = $("#col-2");
var col3El = $("#col-3");

 console.log(currentHr);

 $("#currentDay").text(currDt);

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

            
            saveButton.addClass("saveBtn i")
            saveButton.attr("type","button");
            saveButton.text("Save");
         
            newRow.addClass("row");
            newCol1.attr("data-index",i);
            newCol.addClass("col-2 hour");
            newCol.text(strHr);
            newRow.append(newCol);

            newCol1.addClass("col-7");
            
            // pEl.addClass("pt-4");
            pEl.text("Save");


            newCol2.addClass("col-2 p-0");
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
});
