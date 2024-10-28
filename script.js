
var now = new Date();
var getYr,getMonth,getDt,getHr,getMin,getSec;

function updateClock() {
    getSec = now.getSeconds();
    document.getElementById("second").innerHTML = update(getSec);

    getMin = now.getMinutes();
    document.getElementById("minute").innerHTML = update(getMin);

    getHr = now.getHours();
    if(getHr > 11){
        getHr = getHr - 12;
    }
    if(getHr === 0) {
        getHr = 12
    }
    document.getElementById("hour").innerHTML = update(getHr);

    getDt = now.getDate();
    document.getElementById("date").innerHTML = update(getDt);

    getMonth = now.getMonth();
    document.getElementById("month").innerHTML = update(getMonth + 1);

    getYr = now.getFullYear();
    document.getElementById("year").innerHTML = update(getYr);
}
updateClock()


function second() {
    getSec++;
    if (getSec === 60) {
        getSec = 0;
        minute()
    }
    document.getElementById("second").innerHTML = update(getSec);    
}
setInterval(second, 1000);

function minute() {
    getMin++;
    if (getMin === 60) {
        getMin = 0;
        hour()
    }
    document.getElementById("minute").innerHTML = update(getMin);
}

function hour() {
    getHr++;
    if (getHr === 13) {
        getHr = 1;
        date()
    }
    document.getElementById("hour").innerHTML = update(getHr);
}

function currentAmpm() {
    if(getHr < 12){
        document.getElementById("amPm").innerHTML= "AM"
    }
}

function date() {
    getDt++;
    if (getMonth === 0 || 2 || 4 || 6 || 7 || 9 || 11) {
        if(getDt === 32) {
            getDt = 1
            month()
        }
    }
    else if(getMonth === 3 || 5 || 8 || 10) {
        if(getDt === 31) {
            getDt = 1;
        }
    }
    else{
        if(getYr % 4 === 0 && getDt === 30){
            getDt = 1;
        }
        else if (getDt === 29) {
            getDt = 1;
        }
    }
    document.getElementById("date").innerHTML = update(getDt);
}

function month() {
    getMonth++;
    if( getMonth > 11) {
        getMonth = 0;
        year()
    }
    document.getElementById("month").innerHTML = update(getMonth + 1);
}

function year() {
    getYr++;
    document.getElementById("year").innerHTML = update(getYr);
}

function update(value) {
    return value < 10 ?  "0" + value : value.toString();
}

