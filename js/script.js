var todayDisplayEl = $('#currentDay');

//display the current day
function displayCurrentDay() {
    var today = moment().format('dddd DD, YYYY hh:mm:ss');
    todayDisplayEl.text(`Today ${today}`);
}
setInterval(displayCurrentDay, 1000);


// First selector the class or id, html
$("selector").metho("")


// on lick
$("b#utton").on("click", function(){
    $("#button").fadeOut(200); //fadeout with 200ms 
    //can change to  mouseover, fadeToggle(200) fadeIn toggle
})
