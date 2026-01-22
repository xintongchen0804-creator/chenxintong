function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function toggleHighlight() {
    const section = document.getElementById("activities");
    section.classList.toggle("highlight");
}
