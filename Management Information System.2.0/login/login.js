const username = document.querySelector("#username");
const password = document.querySelector("#password");

const admins = {
  admin: "admin",
};

document.querySelector(".login-form").addEventListener("click", () => {
  const usernameValue = username.value;
  const passwordValue = password.value;

  if (admins[usernameValue] && admins[usernameValue] === passwordValue) {
    window.location.href = "./Dashboard.html";
  } else {
    alert("Wrong username or password");
  }
});