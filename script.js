// Function to verify email
function verifyEmailAddress(){
    var email = document.getElementById("emailAddress").value;
    var verifyEmail = document.getElementById("verifyEmail").value;

    if(email !== verifyEmail){
        alert('Error. Email addresses do not match.')
        e.preventDefault;
    }
}