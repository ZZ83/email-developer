const form         = document.getElementById('form');
const error        = document.getElementById('error');
const submitButton = document.getElementById('submitButton');

const nameInput    = document.getElementById('name');
const emailInput   = document.getElementById('email');
const messageInput = document.getElementById('message');

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function validateEmail(input) {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(validRegex)) {
        input.classList.remove("-error");
        return true;
    } else {
		let small = document.createElement('small');
		small.textContent = 'Please add a valid email';
		insertAfter(small, emailInput);
        input.classList.add("-error");
        return false;
    }
}

function isFormReady() {
    if ( nameInput.value    !== "" && 
         emailInput.value   !== "" && 
         messageInput.value !== "" && 
         ( validateEmail(emailInput) ) ) {
        return true;
    } else {
        return false;
    }
}

function showActive(element) {
	if (element.value !== "") {
        element.classList.add("-active");
    } else {
		element.classList.remove("-active");
	}
}

nameInput.addEventListener("keyup", () => {

	if (nameInput.classList.contains("-error")) {
		nameInput.classList.remove("-error");
		nameInput.nextElementSibling.remove();
	}
    showActive(nameInput);
});

emailInput.addEventListener("keyup", () => {
	if (emailInput.classList.contains("-error")) {
		emailInput.classList.remove("-error");
		emailInput.nextElementSibling.remove();
	}
	showActive(emailInput);
	validateEmail(emailInput);
});

messageInput.addEventListener("keyup", () => {
	if (messageInput.classList.contains("-error")) {
		messageInput.classList.remove("-error");
		messageInput.nextElementSibling.remove();
	}
    showActive(messageInput);
});

submitButton.addEventListener("click", (event) => {
    if( !isFormReady() ) {
        event.preventDefault()
        if (nameInput.value === "" && !nameInput.classList.contains("-error")) {
			let small = document.createElement('small');
			small.textContent = 'This field is required';
			insertAfter(small, nameInput);
			nameInput.classList.add("-error");
        }
        if (emailInput.value === "" && !emailInput.classList.contains("-error")) {
			let small = document.createElement('small');
			small.textContent = 'This field is required';
			insertAfter(small, emailInput);
			emailInput.classList.add("-error");
        }
        if (messageInput.value === "" && !messageInput.classList.contains("-error")) {
			let small = document.createElement('small');
			small.textContent = 'This field is required';
			insertAfter(small, messageInput);
			messageInput.classList.add("-error");
        }
    } else {
        form.submit();
        // form.reset();
        return false;
    }
});