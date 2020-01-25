function validateForm() {
    const name = document.forms["newsletter"]["name"].value;
    const age = document.forms["newsletter"]["age"].value;
    const email = document.forms["newsletter"]["email"].value;
    
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
}