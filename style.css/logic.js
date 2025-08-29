const coCount = document.getElementById("copy-count");
const copyButtons = document.querySelectorAll(".copy-btn");
const heartCount = document.getElementById("heart-count");
const heartIcons = document.querySelectorAll(".heart-img");

copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let count = parseInt(coCount.textContent);
        coCount.textContent = count + 1;
    });
});



heartIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let count = parseInt(heartCount.textContent);

        if (icon.classList.contains("text-red-500")) {
            icon.classList.remove("text-red-500");
            icon.classList.add("text-gray-400");
            heartCount.textContent = count - 1;
        } else {
            icon.classList.add("text-red-500");
            icon.classList.remove("text-gray-400");
            heartCount.textContent = count + 1;
        }
    });
});


