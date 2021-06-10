console.log("Loading data to storage...");

function onSubmit() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const dob = document.getElementById("dob").value;
    const user = new User(name, email, number, dob);

    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem(user.email, user.toString());
        alert("Data saved successfully!");
    } else {
        alert("Data not saved!");
    }

    var txt = "";
    if (document.getElementById("number").validity.rangeOverflow) {
        txt = "Value too large";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;

    if (document.getElementById("number").validity.rangeUnderflow) {
        txt = "Value too small";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;

    console.log("Name is", " ", name);
    console.log("Email is", " ", email);
    console.log("Number is", " ", number);
    console.log("Date of birth is", " ", dob);
}

function User(name, email, number, dob) {
    this.name = name;
    this.email = email;
    this.number = number;
    this.dob = dob;
    this.toString = function() {
        return name + " " + email + " " + number + " " + dob;
    }
}
console.log("Data saved!");