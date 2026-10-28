document.addEventListener("DOMContentLoaded", function () {
    const name = document.querySelector(".sidebar h1");

    if (name) {
        name.style.cursor = "pointer";
        name.title = "Аты-жөнін басыңыз";

        name.addEventListener("click", function () {
            alert("Кулатаева Айшаның түйіндемесі");
        });
    }

    console.log("Түйіндеме сәтті жүктелді!");
});