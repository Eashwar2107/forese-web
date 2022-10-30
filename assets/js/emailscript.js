let arr = {};


function myValidate(from_name, email_id, message){

    if(!(/^[A-Za-z]+$/).test(from_name)){
        window.alert("Enter Valid Name");
        return false;
    }else if(!(/@/).test(email_id)){
        window.alert("Enter Valid Email");
        return false;
    }else if(!message){
        window.alert("Enter a message");
        return false;
    }else{
        arr = {
            from_name,
            email_id,
            message
        }

        return arr;
    }

}

function SendMail() {
    

    var from_name = document.forms.contact_form.name_sender.value;
    var email_id = document.forms.contact_form.emailadd.value;
    var message = document.forms.contact_form.msg_sender.value;

    let validatedParams = myValidate(from_name, email_id, message);

    if(validatedParams){
        emailjs.send("service_ds29zww", "template_a28qkyd", arr).then(function (res) {
            window.alert("Message Sent!" + res.status);
        })
    }
}
