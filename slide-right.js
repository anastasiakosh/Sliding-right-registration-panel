document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const formContainer = document.querySelector(".form-container");
    let isRegisterVisible = false;

    slider.addEventListener("click", () => {
        if (!isRegisterVisible) {
            formContainer.style.transform = "translateX(-50%)";
            slider.style.transform = "translateX(100%)";
            slider.textContent = "Login";
        } else {
            formContainer.style.transform = "translateX(0)";
            slider.style.transform = "translateX(0)";
            slider.textContent = "Register";
        }
        isRegisterVisible = !isRegisterVisible;
    });
});
