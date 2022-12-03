var countBtn = document.getElementById("countdownBtn");
var displayTime = document.getElementById("displayTime");
var count = 0;
const getInput = {
    next: function() {
        //gets the hours minutes and seconds from user input
        var hrs = document.getElementById("hours").value;
        var mins = document.getElementById("minutes").value;
        var sec =  document.getElementById("seconds").value;
       
        //adding the hours minutes and seconds together
        const durationhrs = hrs * 3600;
        const durationmins = mins * 60;
        const durationsecs = parseInt(sec);
        const durationnew = durationhrs + durationmins;
        const duration = durationnew + durationsecs;


        let startCountSub;
        //starting a subscribtion that counts down in one second increments 
        startCountSub = Rx.Observable.interval(1000).map(count => duration - count).subscribe(seconds => {
            //disables the count button when the count down starts
            countBtn.disabled = true;
            //uses the date function to get the count down in hh:mm:ss and then slices off the time zone.
            var time = String(seconds/3600);
            var date = new Date(0, 0);
            date.setSeconds(+time * 60 * 60);
            displayTime.innerHTML = date.toTimeString().slice(0,8);      
            //unsubscribes when the timer hits 00:00:00. Otherwise it would loop to 23:59:59 and continue counting down
            if(displayTime.innerHTML == "00:00:00") {
                startCountSub.unsubscribe();
                countBtn.disabled = false;
            }      
          })


    }

    

}

//subscribes to the countdown function when count button is pressed.
var countObservable = Rx.Observable.fromEvent(countBtn, 'click');
countObservable.subscribe(getInput);


