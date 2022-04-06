    var todayDisplayEl = $('#currentDay');
    var mainEL = $('container');

    //display the current day
function displayCurrentDay() {
    var today = moment().format('dddd DD, YYYY LT');
    todayDisplayEl.text(`Today ${today}`);
}
setInterval(displayCurrentDay, 1000);

$('mainEL').ready(function() {
    var businessHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    for (i = 0 ; i < businessHours.length; i++) {
        displayScheduleTimes(i, businessHours[i]);
    }
    // create a work schedule hours
function displayScheduleTimes(i, businessHours) {
    // display AM & PM
    var displayHours = businessHours > 12 ? businessHours - 12 : businessHours;
    var dayNight = '';
    if (businessHours < 12) {
        dayNight = ' AM'
    }
    else {
        dayNight =' PM';
    }
    //display list of business hours 9 am to 5pm
    var businessHoursColumn = $(`<div class='col-sm-2 timeCol'></div>`).text(displayHours + ':00' + dayNight).css({color: 'blue', fontWeight: 'bold'});''
    // display the scheduleNoteColumn
    var scheduleNoteColumn = $(`<div class='col-sm-8 schedule' id='${businessHours + 'a'}'><input class='inputText'></div>`);
    //display the save button
    var saveColumn = $(`<div class='col-sm-2' id='save'><button type='button' class='btn btn-info' id='${businessHours + 'b'}'><i class='fas fa-save'></i></button></div>`);
    //display the row of 3 column above
    var displayRow = $(`<div class='row' id='${businessHours}'></div>`).append(businessHoursColumn, scheduleNoteColumn, saveColumn);

    //appending row to the home page HTML
    $('.container').append(displayRow)

    //getting the localStorage
    var savedNote = window.localStorage.getItem(businessHours + 'a');
    if (savedNote !== null) {
        $('#' + businessHours + 'a input').css({backgroundColor: 'gray', borderRadius: '5px', color: "#fff"}).val(savedNote);
    }
}
    //setting the key value to local storage
    $('.btn').on('click', function(){
        var buttonId = $(this).attr('id');
        var textId = buttonId.replace('b', 'a');
        var textContent = $('#' + textId).children()[0].value;
        localStorage.setItem(textId, textContent);
        window.location.reload()
    });

    // set color
    var currentHour = moment().format('LT');
    if (businessHours === currentHour) {
        $('#' + businessHours).css('backgroundColor', 'red');
    }
    else if (businessHours > currentHour) {
        // $('#' + businessHours).css('backgroundColor', 'blue');
    }
    else {
        $('#' + businessHours).css('backgroundColor', 'yellow');
    }

});