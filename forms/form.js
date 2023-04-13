
function validateForm() {
	// Get the input values
	let btn;
	var name = document.forms['myForm']["name"].value.trim();
	var email = document.forms["myForm"]["email"].value.trim();
	var subject = document.forms["myForm"]["subject"].value.trim();
	var message = document.forms["myForm"]["message"].value.trim();

	// Check if the name field is empty
	if (name == "") {
		alert("Please enter your name.");
		return btn =  false;
	}

	// Check if the email field is empty and a valid email
	if (email == "") {
		alert("Please enter your email.");
		return btn = false;
	} else if (!/\S+@\S+\.\S+/.test(email)) {
		alert("Please enter a valid email address.");
		return  btn = false; 
	}

	// Check if the subject field is empty
	if (subject == "") {
		alert("Please enter a subject.");
		return btn =  false;
	}

	// Check if the message field is empty
	if (message == "") {
		alert("Please enter a message.");
		return btn =  false;
	}

	// If all fields are filled out, submit the form
	alert("Thank you for your message, " + name + "!");
	return btn = true;
}
