const container = document.querySelector(".signup-container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");
const signUpBtn = document.querySelector(".color-bg button");

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach(pwField => {
      if(pwField.type === "password") {
        pwField.type = "text";
        
        pwShowHide.forEach(icon => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";
        
        pwShowHide.forEach(icon => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

signUp.addEventListener("click", () => {
  container.classList.add("active");
});

login.addEventListener("click", () => {
  container.classList.remove("active");
});

//signUpBtn.addEventListener("click", () => {
//  container.classList.toggle("change");
//});
