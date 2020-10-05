$(document).ready(function() {

var currDt = moment().format('LLLL');
var currentHr = parseInt(13) //moment().format('h');
var timeBlockEl = $(".time-block");
var workStartHr = 9;
var workEndHr = 13;
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
            var saveButton = $("<div>");
            var pEl = $("<p>");
            
            // saveButton.addClass("btn btn-primary saveBtn");
            // saveButton.attr("type","button");
            saveButton.text("Save");
         
            newRow.addClass("row");
            newCol.addClass("col-2 hour");
            newCol.text(strHr);
            newRow.append(newCol);

            newCol1.addClass("col-7");
            
            pEl.addClass("pt-4");
            pEl.text("Save");
            // newCol1.text("enter tasks here");

            newCol2.addClass("col-2 saveBtn");
            // newCol2.append(saveButton);
            newCol2.append(pEl);

            
            timeBlockEl.append(newRow);
            newRow.append(newCol1);
            newRow.append(newCol2);

        //     // styles description based on whether or not the hour is current
        //     if (currentHr === i){
        //         $(".textarea").addClass("present");
        //         console.log("current hour is " + i);
        //     }
        //     else if (currentHr < i && currentHr != i){
        //        $(".textarea").addClass("past");
        //         console.log("past hour is " + i);
        //     }
        //     else {$("textarea").addClass("future")
        // console.log("future hour is " + i)}

            // descP.text("Testing 1-2-3");
            // timeP.text(strHr);
            // $(".float-left").append(timeP);
            // $(".float-none").append(descP);

            


        }
});
