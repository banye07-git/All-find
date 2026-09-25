const form = document.createElement("form");
form.method = "POST";
form.action = "/submit"; // Replace with your desired action URL
const userDiv = document.createElement("div");
const userLabel = document.createElement("label");
userLabel.textContent = "Username:";
userLabel.setAttribute("for", "username");
const userInput = document.createElement("input");
userInput.type = "text";
userInput.id = "username";
userInput.name = "username";
userDiv.appendChild(userLabel);
userDiv.appendChild(userInput);
form.appendChild(userDiv);

const passDiv = document.createElement("div");
const passLabel = document.createElement("label");
passLabel.textContent = "Password:";
passLabel.setAttribute("for", "password");
const passInput = document.createElement("input");
passInput.type = "password";
passInput.id = "password";
passInput.name = "password";
passDiv.appendChild(passLabel);
passDiv.appendChild(passInput);
form.appendChild(passDiv);

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
form.appendChild(submitButton);

const signupDiv = document.createElement("div");
signupDiv.className = "signup-link";
const signupText = document.createElement("span");
signupText.textContent = "Don't have an account? ";

const signupLink = document.createElement("a");
signupLink.href = "#"; // Replace with your desired signup URL
signupLink.textContent = "Sign up here";
signupDiv.appendChild(signupText);
signupDiv.appendChild(signupLink);
form.appendChild(signupDiv);

document.getElementById("form-container").appendChild(form);