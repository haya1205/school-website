function registration_form(event) {
    var form = document.getElementById("contactForm");

    
    if (form.checkValidity()) {
        alert("School Registration Form Submitted Successfully!");
        return true; 
    } else {
        
        return false; 
    }
}
