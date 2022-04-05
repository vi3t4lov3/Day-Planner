var todayDisplayEl = $('#currentDay');
var displayBusinessHoursEl = $('#displayBusiness');
//display the current day
function displayCurrentDay() {
    var today = moment().format('dddd DD, YYYY hh:mm:ss');
    todayDisplayEl.text(`Today ${today}`);
}
setInterval(displayCurrentDay, 1000);

$('document').ready(function() {
    var businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    for (i = 0 ; i < businessHours.length; i++) {
        displayScheduleTimes(i, businessHours[i]);
    }
})

// create a work schedule hours
function displayScheduleTimes(i, businessHours) {
    var displayHours = businessHours > 12 ? businessHours - 12 : businessHours;

    //display list of business hours 9 am to 5pm
    var businessHoursColumn = $('<div>').addClass('col-sm-2 timeCol').text(displayHours + ':00');
    // display the scheduleNoteColumn
    var scheduleNoteColumn = $('<div>').addClass('col-sm-8 schedule').text(type);
    var saveColumn = $()





    $('.container').append(scheduleNoteColumn)
     

}

