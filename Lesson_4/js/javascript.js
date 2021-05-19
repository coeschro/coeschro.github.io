function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle('responsive');
}

let date = new Date();
document.querySelector("#year").textContent = date.getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;

