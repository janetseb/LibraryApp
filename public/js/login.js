var email= document.getElementById("email");
var pwd= document.getElementById("pwd");
let regex=/^([\w\.]+)@([\w]+).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate(){
    if(email.value.trim()==""){
        alert("fields can't be empty");
        return false;
    }else if(pwd.value.trim()==""){
        alert("Fields can't be empty");
    }
    else if(!isEmail(email.value)){
        alert ("Email is not valid");
        return false;
    } else if(pwd.value.length<8) {
        alert("Password should contain minimum 8 characters");
        return false;
    } else {
        return validatePassword(pwd);
    }

}
function isEmail(email){
    return /^([\w\.]+)@([\w]+).([a-z]{2,3})(.[a-z]{2,3})?$/.test(email);
}

