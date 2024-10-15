function val() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let subject = document.getElementById("subject")
    let message = document.getElementById("message")


    if (name.value.length <= 3) {
        alert('Please enter your full name')
    }
    else if (!email.value.endsWith(".com")) {
        alert('Email must end with .com')
    }
    else if (phone.value.length <= 5) {
        alert('Phone number is invalid')
    }
    else if (subject.value.length < 3) {
        alert('Subject must be at least 3 characters')
    }
    else if (message.value.length < 10) {
        alert('Message must be at least 10 characters')
    }
    else {
        alert("Message sent")
    }

}