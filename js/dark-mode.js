// document.addEventListener("DOMContentLoaded", function () {
//         const darkModeToggle = document.getElementById("dark-mode-toggle");
//         const darkModeStyle = document.getElementById("dark-mode-style");
//         const headerSide = document.querySelector("#banner-content");

//         darkModeToggle.addEventListener("click", function () {
//             if (darkModeStyle.disabled) {
//                 darkModeStyle.disabled = false;
//                 headerSide.style.backgroundColor = "black";
//                 localStorage.setItem("darkMode", "enabled");
//             } else {
//                 darkModeStyle.disabled = true;
//                 headerSide.style.backgroundColor = "white";
//                 localStorage.setItem("darkMode", "disabled");
//             }
//         });
//         if (localStorage.getItem("darkMode") === "enabled") {
//             darkModeStyle.disabled = false;
//         } else {
//             darkModeStyle.disabled = true;
//         }
//     });