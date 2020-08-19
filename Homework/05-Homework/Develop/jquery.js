$(document).ready(function () {
    $("#currentDay").text(moment().format('LL'));
    var workDay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
    for (var i = 0; i < workDay.length; i++) {
        var newDiv = $("<div>");
        var hour = $("<div>");
        var description = $("<textarea>");
        var save = $("<button>");
        var icon = $("<i>");

        newDiv.attr("class", "row time-block");
        newDiv.attr("id", workDay[i]);
        $(".container").append(newDiv);

        hour.attr("class", "hour col-1");
        newDiv.append(hour);
        hour.text(workDay[i]);

        description.attr("class", "description col-10");
        newDiv.append(description);

        save.attr("class", "saveBtn col-1");
        newDiv.append(save);

        icon.attr("class", "far fa-save");
        save.append(icon);
    }

})