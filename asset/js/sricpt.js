// go top btn

const goTopBtn = document.getElementById("goTop");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    goTopBtn.style.bottom = "20px";
  } else {
    goTopBtn.style.bottom = "10000px";
  }
});
// handle event bottom to top buttom
goTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// set navbar bg
const navigationBar = document.getElementById("full-navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navigationBar.classList.add("set-nav-bg");
  } else {
    navigationBar.classList.remove("set-nav-bg");
  }
});

// navbar start
const showMenuIcon = document.getElementById("show-icon");
const hideMenuIcon = document.getElementById("hide-icon");
const navbar = document.querySelector("header nav ul");

function showMenu() {
  navbar.classList.add("show-navbar");
  // navbar.style.display = "block";
  // navbar.style.top = "40px";
  showMenuIcon.classList.add("d-none");
  hideMenuIcon.classList.remove("d-none");
}

function hideMenu() {
  navbar.classList.remove("show-navbar");
  // navbar.style.display = "none";
  hideMenuIcon.classList.add("d-none");
  showMenuIcon.classList.remove("d-none");
}

// mail part

const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const messageElement = document.getElementById("message");

//   set setError function
function setError(element, message) {
  element.style.border = "1px solid red";
  const errorElement = element.nextElementSibling;
  errorElement.innerText = message;
}

//   set Success function
function setSuccess(element) {
  element.style.border = "1px solid green";
  const errorElement = element.nextElementSibling;
  errorElement.innerText = "";
}
//   const error = false;
function handleForm(event) {
  event.preventDefault();
  const name = nameElement.value;
  const email = emailElement.value;
  const message = messageElement.value;

  if (name === "" || name.length < 3) {
    error = true;
    return setError(nameElement, "Name is required");
  } else {
    setSuccess(nameElement);
  }

  if (email === "") {
    return setError(emailElement, "Email is required");
  } else {
    setSuccess(emailElement);
  }
  if (message === "") {
    return setError(messageElement, "message is required");
  } else {
    setSuccess(messageElement);
  }

  // email js
  var templateParams = {
    name: name,
    email: email,
    message: message,
  };

  // if(error){
  //     return
  // }else{

  // }
  emailjs.send("service_zvxdx3c", "template_5mu34ri", templateParams).then(
    (response) => {
      //   console.log("send", response);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Success",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    (error) => {
      //   console.log("FAILED...", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  );
}
