function setCookies() {
    var firstName = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
  
    document.cookie = "firstname=" + firstName;
    document.cookie = "email=" + email;
  
    window.location.href = "/";
  }

  function showCookies() {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Cookies: " + document.cookie;
    document.body.appendChild(paragraph);
  }