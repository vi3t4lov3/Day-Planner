var todayDisplayEl = $('#currentDay');

//display the current day
function displayCurrentDay() {
    var today = moment().format('dddd DD, YYYY hh:mm:ss');
    todayDisplayEl.text(`Today ${today}`);
}
setInterval(displayCurrentDay, 1000);
