var countBtn = document.getElementById("countdownBtn");

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
        
        Rx.Observable.interval(1000).map(count => duration - count).subscribe(seconds => {
            console.log(seconds);
          })
    }
}

var countObservable = Rx.Observable.fromEvent(countBtn, 'click');
countObservable.subscribe(getInput)
