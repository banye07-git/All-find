const form = document.createElement("form");
form.method = "POST";
form.action = "#";

// ===== First Name =====
const fnameDiv = document.createElement("div");

const fnameLabel = document.createElement("label");
fnameLabel.textContent = "First Name";
fnameLabel.setAttribute("for", "firstname");

const fnameInput = document.createElement("input");
fnameInput.type = "text";
fnameInput.id = "firstname";
fnameInput.name = "firstname";
fnameInput.required = true;

fnameDiv.appendChild(fnameLabel);
fnameDiv.appendChild(fnameInput);


// ===== Last Name =====
const lnameDiv = document.createElement("div");
const lnameLabel = document.createElement("label");
lnameLabel.textContent = "Last Name";
lnameLabel.setAttribute("for", "lastname");

const lnameInput = document.createElement("input");
lnameInput.type = "text";
lnameInput.id = "lastname";
lnameInput.name = "lastname";
lnameInput.required = true;

lnameDiv.appendChild(lnameLabel);
lnameDiv.appendChild(lnameInput);

// ===== Email =====
const emailDiv = document.createElement("div");

const emailLabel = document.createElement("label");
emailLabel.textContent = "Email";
emailLabel.setAttribute("for", "email");

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.name = "email";
emailInput.required = true;

emailDiv.appendChild(emailLabel);
emailDiv.appendChild(emailInput);

// ===== Password =====
const passDiv = document.createElement("div");

const passLabel = document.createElement("label");
passLabel.textContent = "Password";
passLabel.setAttribute("for", "password");

const passInput = document.createElement("input");
passInput.type = "password";
passInput.id = "password";
passInput.name = "password";
passInput.required = true;

passDiv.appendChild(passLabel);
passDiv.appendChild(passInput);

// ===== Submit Button =====
const submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Create Account";

// ===== Back to Sign In Link =====
const signinDiv = document.createElement("div");
signinDiv.className = "signin-link";


// Add everything to the form
form.appendChild(fnameDiv);
form.appendChild(lnameDiv);
form.appendChild(emailDiv);
form.appendChild(passDiv);
form.appendChild(submitBtn);
form.appendChild(signinDiv);

// Add form to the page
document.getElementById("form-container").appendChild(form);