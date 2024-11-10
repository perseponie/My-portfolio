function sendmail(){

   
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    
    emailjs.send("service_l98eveu","template_74bbbqi",parms).then(alert("Email Sent!!!"))
 
} 