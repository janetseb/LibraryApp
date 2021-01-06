var form = document.getElementById('form');
var name1 = document.getElementById('name1');
var phoneno = document.getElementById('phoneno');
var email = document.getElementById('email');
var pwd = document.getElementById('pwd');
var pwd1 = document.getElementById('pwd1');


function check_inp(){
    if(name1.value === "") {
		alert("Name cannot be blank");
    } 
	if(phoneno.value === "") {
		alert("Number cannot be blank");
    } else if (!isNumber(phoneno.value)){
        alert( "Not a valid number");
    }else {
		return isNumber(phoneno);
	}
	
	if(email.value === '') {
		alert( "Email cannot be blank");
	} else if (!isEmail(email.value)) {
		alert("Not a valid email");
	} else {
		return isEmail(email);
	}
	
	if(pwd.value === "") {
		alert( "Password cannot be blank");
    } else if (!isPassword(pwd.value)){
        alert("Not a valid password");
    }
     else {
		return isPassword(pwd);
	}
	
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}
	
function isEmail(email) {
	return /^([\w\.]+)@([\w]+).([a-z]{2,3})(.[a-z]{2,3})?$/.test(email);
}


function isPassword(pwd){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pwd);
}


function validatePassword(pwd) {
                
     
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); 
    matchedCase.push("[A-Z]");      
    matchedCase.push("[0-9]");      
    matchedCase.push("[a-z]");     

    
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(pwd)) {
            ctr++;
        }
    }
    
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Poor";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;

   
        if (document.getElementById('pwd').value ==
           document.getElementById('pwd1').value) {
           document.getElementById('message').style.color = 'green';
           document.getElementById('message').innerHTML = 'matching';
         } else {
           document.getElementById('message').style.color = 'red';
           document.getElementById('message').innerHTML = 'not matching';
        
       }
    }
    var check = function() {
        if (document.getElementById('pwd').value ==
          document.getElementById('pwd1').value) {
          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'matching';
        } else {
          document.getElementById('message').style.color = 'red';
          document.getElementById('message').innerHTML = 'Not matching';
        }
      }