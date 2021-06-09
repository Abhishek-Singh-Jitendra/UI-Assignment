console.log("Data Receiving...");

function onSubmit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const dob = document.getElementById("dob").value;
    console.log("Name is", " ", name);
    console.log("Email is", " ", email);
    console.log("Number is", " ", number);
    console.log("Date of birth is", " ", dob);
    alert("Data Received Successfully");
}