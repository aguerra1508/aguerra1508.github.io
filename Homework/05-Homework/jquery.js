//Document ready function
$(document).ready(function () {
    //Current day with moment js data
    $("#currentDay").text(moment().format('LL'));
    //Work day object with hour display and military time for moment js
    var workDay = [{
            hour: "9AM",
            time: 8,
        },
        {
            hour: "10AM",
            time: 9,
        },
        {
            hour: "11AM",
            time: 11,
        },
        {
            hour: "12PM",
            time: 12,
        },
        {
            hour: "1PM",
            time: 13,
        },
        {
            hour: "2PM",
            time: 14,
        },
        {
            hour: "3PM",
            time: 15,
        },
        {
            hour: "4PM",
            time: 16,
        },
        {
            hour: "5PM",
            time: 17,
        }
    ]
    //For loop to create time blocks for work day object
    for (var i = 0; i < workDay.length; i++) {
        //Create elements
        var newDiv = $("<div>");
        var hourDiv = $("<div>");
        var description = $("<textarea>");
        var save = $("<button>");
        var icon = $("<i>");
        
        //Add attributes which correspond with CSS style sheet
        newDiv.attr("class", "row time-block");
        newDiv.attr("id", workDay[i].hour);
        $(".container").append(newDiv);

        hourDiv.attr("class", "hour col-1");
        newDiv.append(hourDiv);
        hourDiv.text(workDay[i].hour);

        description.attr("class", "description col-10");
        //Get local storage of items, if already present
        var eventText = localStorage.getItem(workDay[i].hour);
        //Display local storage items, if already present
        description.val(eventText);
        //If, else if, else statement for changing of colors to indicate if past, present or future time
        if (workDay[i].time < moment().hour()) {
            description.addClass("past");
        } else if (workDay[i].time > moment().hour()){
            description.addClass("future");
        } else {
            description.addClass("present");
        }
            
        newDiv.append(description);

        save.attr("class", "saveBtn col-1");
        newDiv.append(save);

        icon.attr("class", "far fa-save");
        save.append(icon);
    };
    //Save button function to set local storage
    $(".saveBtn").click(function() {
        var descripText = $(this).siblings("textarea").val();
        var timeText = $(this).siblings(".hour")[0].innerText;
        localStorage.setItem(timeText,descripText);
       });
})
