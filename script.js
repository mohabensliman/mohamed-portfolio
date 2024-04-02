function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function copiarEmail() {
  var email = document.getElementById("email");
  var emailText = email.textContent || email.innerText;

  var tempInput = document.createElement("input");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-1000px";
  tempInput.value = emailText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  alert("Correo electrónico copiado al portapapeles correctamente");
}
