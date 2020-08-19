$(document).ready(function () {
    $("#currentDay").text(moment().format('LL'));
    var workDay = [{
            hour: "9AM",
            time: 9,
        },
        {
            hour: "10AM",
            time: 10,
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
    for (var i = 0; i < workDay.length; i++) {
        var newDiv = $("<div>");
        var hourDiv = $("<div>");
        var description = $("<textarea>");
        var save = $("<button>");
        var icon = $("<i>");

        newDiv.attr("class", "row time-block");
        newDiv.attr("id", workDay[i].hour);
        $(".container").append(newDiv);

        hourDiv.attr("class", "hour col-1");
        newDiv.append(hourDiv);
        hourDiv.text(workDay[i].hour);

        description.attr("class", "description col-10");
        if (workDay[i].time < moment().hour()) {
            description.attr("class", "description col-10 past");
        } else if (workDay[i].time > moment().hour()){
            description.attr("class","description col-10 future");
        } else {
            description.att("class", "description col-10 present");
        }
        newDiv.append(description);

        save.attr("class", "saveBtn col-1");
        newDiv.append(save);

        icon.attr("class", "far fa-save");
        save.append(icon);
    };
})

//Current time: moment().format('LT');
//moment().toString());
//moment().hour();