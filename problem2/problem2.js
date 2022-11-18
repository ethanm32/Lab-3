var countBtn = document.getElementById("countdownBtn");

const getInput = {
    next: function() {
        var hrs = document.getElementById("hours").value;
        var mins = document.getElementById("minutes").value;
        var sec =  document.getElementById("seconds").value;
        console.log(hrs);
        console.log(mins);
        console.log(sec);
    }
}

var countObservable = Rx.Observable.fromEvent(countBtn, 'click');
countObservable.subscribe(getInput)
