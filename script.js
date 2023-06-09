function updateTime () {
    var dateTime = new Date(); 
    /*new keyword returns us an object keyword*/
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var am_or_pm = document.getElementById("am-or-pm");

    if(hours >= 12) {
        am_or_pm.innerHTML = "PM";
    } else {
        am_or_pm.innerHTML = "AM";
    }

    if(hours > 24) {
        hours = hours - 24;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateTime, 1000);