var forms = document.querySelector('#forms');
forms.addEventListener('submit',function(e){
  e.preventDefault();

validateName();
validateUName();
validateemail();
validatephone();
validatepassword();




})

let name=document.querySelector('#name');
let error=document.querySelector('#error');


function validateName(){
	if (name.value=="") {
		error.innerText="Enter your name";

	}
	else{
		error.innerText="";
	}
}


let uname = document.querySelector('#uname');
let erro1 = document.querySelector('#erro1');


function validateUName(){
   if(uname.value == ""){
   	error1.innerText="Enter User Name";
  }

  else{
  	error1.innerText= "";
  }

}

let email = document.querySelector('#email');
let erro2 = document.querySelector('#error2');

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


let phone = document.querySelector('#phone');
let error3 = document.querySelector('#error3');


function validatephone(){
	var phone = document.querySelector('#phone');

	var phone_input = phone.value;
	if(phone_input == ""){
		error3.innerText = "please enter number"
	}
	else{
		if(phone_input.match(/^[0-9]{10}$/)){
			error3.innerText="";

	}
	else{
      error3.innerText="enter valid Number";
	}
}
}


function validatepassword(){
	let password = document.querySelector('#password');
	let error4 = document.querySelector('#error4');
	let cpassword = document.querySelector('#cpassword');
	let error5  = document.querySelector('#error5');
	let password_input = password.value;
	let cpassword_input = cpassword.value;

	if(password_input ==""){
		error4.innerText="please enter password";

	}

	else{
		if(!password_input.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%?&^])[A-Za-z\d@.#$!%?&]{8,15}$/)){
			error4.innerText="please enter valid password";
		}
     
      else{
      	error4.innerText="";
      	error5.innerText="please enter above password";
      	if(cpassword_input !=""){
      	if(password_input==cpassword_input){
      		error5.innerText="";
      	}

      	else{
      		error5.innerText="please enter matching password";
      	}
      	
      }
  }

	}
}




















