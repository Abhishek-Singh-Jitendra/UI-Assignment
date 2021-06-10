const counter = (
    function() {
        var counterValue = 0;
        var maggieP = 0;

        function maggieAdd(val) {
            maggieP = maggieP + 10;
        }

        function maggieSub(val) {
            maggieP = maggieP - 10;
        }

        function changeBy(val) {
            console.log("changeBy called");
            counterValue = counterValue + val;
        }
        return {
            increment: function() {
                console.log("increment called");
                changeBy(1);
                maggieAdd(1);
            },
            decrement: function() {
                console.log("decrement called");
                changeBy(-1);
                maggieSub();
            },
            value: function() {
                return counterValue;
            },
            maggie: function() {
                return maggieP;
            }
        };
    })();

function onClick(event) {
    console.log("onclick called on" + event.target.id);
    const result = document.getElementById("result");
    const mgt = document.getElementById("mgt");
    switch (event.target.id) {
        case "button1":
            counter.decrement()
            break;
        case "button2":
            counter.increment()
            break;
        default:
            console.log("default is called");
            break;
    }
    result.innerHTML = counter.value();
    mgt.innerHTML = counter.maggie();
}



const counter2 = (
    function() {
        var counterValue = 0;
        var pepsiP = 0;

        function pepsiAdd(val) {
            pepsiP = pepsiP + 40;
        }

        function pepsiSub(val) {
            pepsiP = pepsiP - 40;
        }

        function changeBy(val) {
            console.log("changeBy called");
            counterValue = counterValue + val;
        }
        return {
            increment: function() {
                console.log("increment called");
                changeBy(1);
                pepsiAdd(1);
            },
            decrement: function() {
                console.log("decrement called");
                changeBy(-1);
                pepsiSub();
            },
            value: function() {
                return counterValue;
            },
            pepsi: function() {
                return pepsiP;
            }
        };
    })();

function onClick2(event) {
    console.log("onclick called on" + event.target.id);
    const result = document.getElementById("result2");
    const mgt = document.getElementById("ppt");
    switch (event.target.id) {
        case "button1":
            counter2.decrement()
            break;
        case "button2":
            counter2.increment()
            break;
        default:
            console.log("default is called");
            break;
    }
    result2.innerHTML = counter2.value();
    ppt.innerHTML = counter2.pepsi();
}

const counter3 = (
    function() {
        var counterValue = 0;
        var cakeP = 0;

        function cakeAdd(val) {
            cakeP = cakeP + 20;
        }

        function cakeSub(val) {
            cakeP = cakeP - 20;
        }

        function changeBy(val) {
            console.log("changeBy called");
            counterValue = counterValue + val;
        }
        return {
            increment: function() {
                console.log("increment called");
                changeBy(1);
                cakeAdd(1);
            },
            decrement: function() {
                console.log("decrement called");
                changeBy(-1);
                cakeSub();
            },
            value: function() {
                return counterValue;
            },
            cake: function() {
                return cakeP;
            }
        };
    })();

function onClick3(event) {
    console.log("onclick called on" + event.target.id);
    const result = document.getElementById("result3");
    const srct = document.getElementById("srct");
    switch (event.target.id) {
        case "button1":
            counter3.decrement()
            break;
        case "button2":
            counter3.increment()
            break;
        default:
            console.log("default is called");
            break;
    }
    result3.innerHTML = counter3.value();
    srct.innerHTML = counter3.cake();
}


function total(event) {
    const tot = document.getElementById("tot");
    // var add = pepsi + maggie + cake;
    tot.innerHTML = counter.maggie() + counter2.pepsi() + counter3.cake();
}