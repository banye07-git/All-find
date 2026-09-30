const Login = document.getElementById("Login");


const passDiv = document.createElement("div");
passDiv.className = "passwordbox"
const passLabel = document.createElement("label");
passLabel.textContent = "Password:";
passLabel.setAttribute("for", "password");

const passInput = document.createElement("input");
passInput.type = "password";
passInput.id = "password";
passInput.name = "password";
passInput.required = true;

const eye = document.createElement("img");
eye.className = "toggle-eye";
eye.src = "https://img.icons8.com/?size=100&id=85035&format=png&color=000000";
eye.alt = "Show";
eye.title = "Show or hide password";

eye.addEventListener("click", () => {
    if(passInput.type === "password"){
        passInput.type = "text";
        eye.src = "https://img.icons8.com/?size=100&id=85028&format=png&color=000000";
               
    }else{
        passInput.type = "password";
        eye.src = "https://img.icons8.com/?size=100&id=85035&format=png&color=000000";       
    } 
});

//====== sign in form====
function SignInForm() {
    Login.innerHTML = ""; //===Clear the page===

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/submit"; 

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
    

    passDiv.appendChild(passLabel);
    passDiv.appendChild(passInput);
    passDiv.appendChild(eye);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Sign In";
    

//switch to sign up form
    const switchDiv = document.createElement("div");
    switchDiv.className = "switchLink";
    const switchText = document.createElement("span");
    switchText.textContent = "Don't have an account? ";
    const switchLink = document.createElement("a");
    switchLink.href = "#";
    switchLink.textContent = "Sign Up";
    
    switchLink.addEventListener("click", ()=> {
        SignUpForm();
    });

    switchDiv.appendChild(switchText);
    switchDiv.appendChild(switchLink);

    form.appendChild(userDiv);
    form.appendChild(passDiv);
    form.appendChild(submitBtn);
    form.appendChild(switchDiv);
    //=====Add form to the page=====
    Login.appendChild(form);

}

//======Sign up form====

function SignUpForm() {
    Login.innerHTML = ""; //===To clear the page===

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/Submit";

    // ===== First Name =====
    const fnameDiv = document.createElement("div");
    const fnameLabel = document.createElement("label");
    fnameLabel.textContent = "First Name:";
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
    lnameLabel.textContent = "Last Name:";
    lnameLabel.setAttribute("for", "lastname");

    const lnameInput = document.createElement("input");
    lnameInput.type = "text";
    lnameInput.id = "lastname";
    lnameInput.name = "lastname";
    lnameInput.required = true;

    lnameDiv.appendChild(lnameLabel);
    lnameDiv.appendChild(lnameInput);

    //==== New User ===
    const newuserDiv = document.createElement("div");
    const newuserLabel = document.createElement("label");
    newuserLabel.textContent = "Username:";
    newuserLabel.setAttribute("for", "newuser");

    const newuserInput = document.createElement("input");
    newuserInput.type = "text";
    newuserInput.id = "newuser";
    newuserInput.name = "newuser";
    newuserInput.required = true;

    newuserDiv.appendChild(newuserLabel);
    newuserDiv.appendChild(newuserInput);


    // ===== Email =====
    const emailDiv = document.createElement("div");
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.setAttribute("for", "email");

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);


    passDiv.appendChild(passLabel);
    passDiv.appendChild(passInput);
    passDiv.appendChild(eye);

    // ===== Submit Button =====
    const SubmitBtn = document.createElement("button");
    SubmitBtn.type = "submit";
    SubmitBtn.value = "Sign Up";
    SubmitBtn.textContent = "Sign Up";

    // ===== Back to Sign In Link =====
    const switchDiv = document.createElement("div");
    switchDiv.className = "switchLink";
    switchDiv.textContent = "Already have an account? ";
    const switchLink = document.createElement("a");
    switchLink.href = "#";
    switchLink.textContent = "Sign In";

    switchLink.addEventListener("click", ()=> {
        SignInForm();
    });
    
    switchDiv.appendChild(switchLink); 
    switchDiv.appendChild(switchLink);


    // Add everything to the form
    //form.appendChild(fnameDiv);
    //form.appendChild(lnameDiv); no need to get first and last name since the only credentials needed will be the username, email and password.
    form.appendChild(newuserDiv);
    form.appendChild(emailDiv);
    form.appendChild(passDiv);
    form.appendChild(SubmitBtn);
    form.appendChild(switchDiv);

    // Add form to the page
    Login.appendChild(form);
}

//===show sign-in form first===
SignInForm();


