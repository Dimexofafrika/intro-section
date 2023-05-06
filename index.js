const featuresBtn = document.querySelector(".features")
const fdropdown = document.querySelector(".fdrpdwn")

const companyBtn = document.querySelector(".company")
const cdropdown = document.querySelector(".cdrpdwn")

const fIcon = document.querySelector("#ficon");
const cIcon = document.querySelector("#cicon");

const sfBtn = document.querySelector(".side-features")
const sfdropdown = document.querySelector(".sidefdrpdwn")

const scBtn = document.querySelector(".side-company")
const scdropdown = document.querySelector(".sidecdrpdwn");

const sfIcon = document.querySelector("#fsidedropicon");
const scIcon = document.querySelector("#csidedropicon")

const sidebar = document.querySelector(".sidebar")
const openmenu = document.querySelector(".menuicon")

const closemenu = document.querySelector(".closemenu")

featuresBtn.addEventListener("click", function(){
    fdropdown.classList.toggle("show");
    fIcon.classList.toggle("fa-angle-down");
    fIcon.classList.toggle("fa-angle-up");
})

companyBtn.addEventListener("click", function(){
    cdropdown.classList.toggle("show");
    cIcon.classList.toggle("fa-angle-down");
    cIcon.classList.toggle("fa-angle-up");
})

sfBtn.addEventListener("click", function(){
    sfdropdown.classList.toggle("show");
    sfIcon.classList.toggle("fa-angle-down");
    sfIcon.classList.toggle("fa-angle-up");
})

scBtn.addEventListener("click", function(){
    scdropdown.classList.toggle("show");
    scIcon.classList.toggle("fa-angle-up");
    scIcon.classList.toggle("fa-angle-down");
})

openmenu.addEventListener("click", function(){
    sidebar.style.display = "block"
    openmenu.style.display = "none"
    closemenu.style.display = "block"

})
closemenu.addEventListener("click", function(){
    sidebar.style.display = "none"
    closemenu.style.display = "none"
    openmenu.style.display = "block"
})



function closeDropdowns(event) {
    if (!event.target.matches('.featuresbtn') && fdropdown.classList.contains('show')) {
      fdropdown.classList.remove('show');
      fIcon.className = "fa-sharp fa-solid fa-angle-down"
    }
    if (!event.target.matches('.companybtn') && cdropdown.classList.contains('show')) {
      cdropdown.classList.remove('show');
      cIcon.className = "fa-sharp fa-solid fa-angle-down"
    }
}
window.addEventListener('click', closeDropdowns);



