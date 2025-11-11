/* Add your JavaScript to this file */
window.onload = function() {
    const message = document.querySelector('.message');
    const email = document.querySelector('#email');

    document.querySelector(".newsletter form").addEventListener('submit', function(event) {
        event.preventDefault(); 
        const emailName = email.value.trim();
        if (emailName === "") {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent = "Thank you! Your email address " + emailName + " has been added to our mailing list!";
        }
    });
};
