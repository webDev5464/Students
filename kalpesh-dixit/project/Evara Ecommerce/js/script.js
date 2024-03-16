function search() {
    let search = document.querySelector(".search-box")
    console.log(search.getAttribute("class"));
    if (search.getAttribute("class") === "search-box notActive") {
        search.setAttribute("class", "search-box active")
    } else {
        search.setAttribute("class", "search-box notActive")
    }
}

function dropdown(element) {
    const dropdownId = element.parentElement.id;
    console.log(dropdownId);
    const dropdown = document.getElementById(dropdownId);
    console.log(dropdown);
    const isActive = dropdown.classList.contains("active")
    console.log(isActive);

    const allDropDowns = document.getElementsByClassName("dropDown1")
    console.log(allDropDowns);

    for (let i = 0; i < allDropDowns.length; i++) {
        allDropDowns[i].classList.remove("active")
    }
    if (!isActive) {
        dropdown.classList.add("active")
    }

}
// function dropdown() {
//     const up = document.querySelector(".up")
//     if (up.getAttribute("class") === "up") {
//         up.setAttribute("class", "up active2")
//     } else {
//         up.setAttribute("class", "up")
//     }
// }
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}