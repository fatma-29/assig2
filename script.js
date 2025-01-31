document.addEventListener("DOMContentLoaded", () => {
    let slider = document.getElementById("slider");
    let slides = slider.children.length;
    let index = 0;

    document.getElementById("next").addEventListener("click", () => {
        index = (index + 1) % slides;
        slider.style.transform = 'translateX(-${index * 100}%)';
    });

    document.getElementById("prev").addEventListener("click", () => {
        index = (index - 1 + slides) % slides;
        slider.style.transform = 'translateX(-${index * 100}%)';
    });

    let themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("bg-gray-900");
        document.body.classList.toggle("text-white");
        themeToggle.textContent = document.body.classList.contains("bg-gray-900") ? "Dark Mode" : "Light Mode";
    });
});