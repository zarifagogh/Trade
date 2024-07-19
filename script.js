const section_1 = document.querySelector(".section_1");
const section_4 = document.querySelector(".section_4");
const section_3 = document.querySelector(".section_3");
const section_2 = document.querySelector(".section_2");

const section_about = document.querySelector(".about");
const section_focus = document.querySelector(".focus");

function about(){
    section_1.style.display="none";
    section_2.style.display="none";
    section_3.style.display="none";
    section_4.style.display="block";
    section_about.style.display="block";
    section_focus.style.display="block";
}