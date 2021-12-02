$(document).ready(function () {
var currentday = moment().format("MMM Do YY");  
if (window.localStorage.getItem(currentday) === null){
    window.localStorage.setItem(currentday, "{}"
        )


} 
$("#currentDay").text(moment().format('MMMM Do YYYY'));

function tomilitarytime(time){
    var hour = time.slice(0, -2)
    var pm  = time.slice(-2, -1)

    console.log(pm)
if (hour=="12") {
    hour= "0"
}
var returnValue = parseInt(hour);

if (pm === "p") { 
    
    returnValue += 12
}

return returnValue;



}

var dayData = JSON.parse(window.localStorage.getItem(currentday));

console.log(JSON.stringify(dayData));

var currenthour=parseInt(moment().format("H"))




$(".timeblock").each((index,Element) => {
    var hourstring =   $(Element).find(".hour").text().trim();

    var hour = tomilitarytime(hourstring);
    var event = dayData[hour];
    var textarea = $(Element).find("textarea");
    if (event !== undefined) {
        textarea.val(event);


    }

    if (hour==currenthour){
        $(Element).addClass("present")
    } else if (hour<currenthour){
        $(Element).addClass("past")

    }  else { 
         $(Element).addClass("future")

    }

    console.log (hour)
    
    var button = $(Element).find(".savebtn");
    button.on("click",() => {
        var eventTitle = textarea.val();


        var day = JSON.parse(window.localStorage.getItem(currentday));

        day[hour] = eventTitle;
        window.localStorage.setItem(currentday, JSON.stringify(day));


    })
})




































});