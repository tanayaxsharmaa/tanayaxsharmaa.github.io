// Dark mode toggle: adds/removes the "dark-mode" class on <body>
// and remembers the choice in localStorage.

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Turn dark mode on (true) or off (false) and update the button to match.
function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    if (isDark) {
        themeIcon.className = "fa fa-sun-o";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeIcon.className = "fa fa-moon-o";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
}

// On page load: use the saved choice, if there is one.
let isDark = localStorage.getItem("theme") === "dark";
applyTheme(isDark);

// On click: flip the theme and save the new choice.
themeToggle.addEventListener("click", function () {
    isDark = !isDark;
    applyTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
});