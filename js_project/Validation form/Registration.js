var form = document.querySelector('#form');


form.addEventListener('submit',(e)=>{
	e.preventDefault();
	validateName();
	validatephone();
	 validateemail();
	validatepassword();
	validatecheck();



let name = document.querySelector('#name');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let cpassword = document.querySelector('#cpassword');
let check = document.querySelector('#check');
let gender_error = document.querySelector('#gender_error');




var gender = document.querySelectorAll('input[name="gender"]');
 
 var isSelected = false;

 for(var i = 0; i<gender.length; i++){
 	if(gender[i].checked){
 		isSelected = true;
 		break;
 	}
 }

 if(!isSelected){
 	gender_error.innerText = "please select";
 }

 else{
 	gender_error.innerText = "";
 }

});

function validateName(){
	var name = document.querySelector('#name');
	var name_input = name.value;
	if(name_input ==""){
		error.innerText="Enter your name";
	}

	else{
		if(name_input.match(/^[a-zA-Z0-9]+$/)){
		    error.innerText="";	
		}
		else{
			error.innerText="Full name required";
		}
	}

}

function validatephone(){
	var phone = document.querySelector('#phone');

	var phone_input=phone.value;
	if(phone_input ==""){
	error1.innerText="please enter your Number";
}

	else{
		if(phone_input.match(/^[0-9]{10}$/)){
			error1.innerText="";

	}
	else{
      error1.innerText="enter valid Number";
	}
}

}

function validateemail(){
	var email = document.querySelector('#email');


	var email_input=email.value;
	if(email_input ==""){
		error2.innerText ="please enter your email";
	}

	else{
		if(email_input.match((/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
){
			error2.innerText="";
		}

		else{
			error2.innerText="enter correct email";
		}
	}
}

function validatepassword(){
	let password = document.querySelector('#password');
	let error3 = document.querySelector('#error3');
	let cpassword = document.querySelector('#cpassword');
	let error4  = document.querySelector('#error4');
	let password_input = password.value;
	let cpassword_input = cpassword.value;

	if(password_input ==""){
		error3.innerText="please enter password";

	}

	else{
		if(!password_input.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%?&^])[A-Za-z\d@.#$!%?&]{8,15}$/)){
			error3.innerText="please enter valid password";
		}
     
      else{
      	error3.innerText="";
      	error4.innerText="please enter above password";
      	if(cpassword_input !=""){
      	if(password_input==cpassword_input){
      		error4.innerText="";
      	}

      	else{
      		error4.innerText="please enter matching password";
      	}
      	
      }
  }

	}
}




function validatecheck(){
	var checked = document.querySelector('#check');

	var check_input = check.checked;
	if(check_input ==""){
		error5.innerText ="please check";
	}
	else{
		error5.innerText="";
	}
}


var state = document.querySelector('#state');
state.addEventListener('change',function(){
	var districts = document.querySelector('#districts');
    districts.innerText ="";

	if(state.value == "TS"){
		var districts_list = ["warangal","jangaon","Rangadeddy"]
	}
	else if(state.value =="AP"){
		var districts_list =["Nellore","prakasham","krishna"];
	}

	for(var i = 0; i<districts_list.length; i++){

		var option = document.createElement('option');
		option.innerText =`${districts_list[i]}`;
		districts.append(option);
	}
})


let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let eyei = document.getElementById("eyei");
let cpassword = document.getElementById("cpassword");



eyei.onclick = function() {

    if(cpassword.type =="password"){
      cpassword.type = "text";
      eyei.src="eye-open.png";	
    }

    else{
    	cpassword.type="password";
    	eyei.src="eye-close.png";
    }


}

eyeicon.onclick = function(){


if(password.type =="password"){
   password.type = "text";
   eyeicon.src="eye-open.png";	
}
  else{
  	password.type="password";
  	eyeicon.src="eye-close.png";
  }

}




