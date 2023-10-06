function setCookiesAndShowWelcomeMessage() {
  var firstName = document.getElementById("firstname").value;
  var email = document.getElementById("email").value;
  
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);

  // Use js-cookie to set cookies
  Cookies.set("firstname", firstName, { expires: expirationDate });
  Cookies.set("email", email, { expires: expirationDate });

  showWelcomeMessageOrForm();
}

function showCookies() {
  var email = Cookies.get("email");
  var firstname = Cookies.get("firstname");

  var paragraph = document.createElement("p");
  paragraph.innerHTML = "Email: " + email + " - Firstname: " + firstname;
  document.getElementById("cookieInfo").innerHTML = '';
  document.getElementById("cookieInfo").appendChild(paragraph);
}

function showForm() {
  var welcomeMessage = document.getElementById("welcomeMessage");
  var loginForm = document.getElementById("loginForm");
  welcomeMessage.innerHTML = ''; 
  loginForm.style.display = "block"; 
}

function hideForm() {
  var loginForm = document.getElementById("loginForm");
  loginForm.style.display = "none"; 
}

function deleteCookiesAndShowForm() {
  // Use js-cookie to remove cookies
  Cookies.remove("firstname");
  Cookies.remove("email");

  showForm();
}

function showWelcomeMessageOrForm() {
  var firstname = Cookies.get("firstname");

  if (firstname) {
    var welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.innerHTML = 'Welcome ' + firstname + ' <a href="#" onclick="deleteCookiesAndShowForm();"> (logout)</a>';
  } else {
    showForm();
  }
}

showWelcomeMessageOrForm();
