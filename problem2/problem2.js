var countBtn = document.getElementById("countdownBtn");
var displayTime = document.getElementById("displayTime");
var count = 0;
const getInput = {
    next: function() {
        var hrs = document.getElementById("hours").value;
        var mins = document.getElementById("minutes").value;
        var sec =  document.getElementById("seconds").value;
        console.log(hrs);
        console.log(mins);
        console.log(sec);

        const durationhrs = hrs * 3600;
        const durationmins = mins * 60;
        const durationsecs = parseInt(sec);
        const durationnew = durationhrs + durationmins;
        const duration = durationnew + durationsecs;
        let startCountSub;
        startCountSub = Rx.Observable.interval(1000).map(count => duration - count).subscribe(seconds => {
            countBtn.disabled = true;
            var time = String(seconds/3600);
            var date = new Date(0, 0);
            date.setSeconds(+time * 60 * 60);
            displayTime.innerHTML = date.toTimeString().slice(0,8);      
            if(displayTime.innerHTML == "00:00:00") {
                startCountSub.unsubscribe();
                countBtn.disabled = false;
            }      
          })


    }

    

}


var countObservable = Rx.Observable.fromEvent(countBtn, 'click');
countObservable.subscribe(getInput);


