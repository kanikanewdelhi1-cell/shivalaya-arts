const form = document.getElementById("enquiryForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "919811443762";

    const text = `Hello Shivalaya Arts!

Name: ${name}
Phone: ${phone}
Service: ${service}
Requirement: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

});
