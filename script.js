function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out.");
        return false;
    }

    // You can add more complex validation or form submission logic here
    alert("Thank you for your message!");
    return true;
}
