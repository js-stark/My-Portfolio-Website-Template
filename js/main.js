// Scroll to top of the page

const scrollup = document.getElementById('scrollup');

scrollup.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
});

window.addEventListener("scroll",function(){
    if(window.scrollY >= 700){
        scrollup.style.opacity = 1;
    }
    else{
        scrollup.style.opacity = 0;
    }
})


//Dark Theme

const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");

if (darkmode) {
  body.classList.add("dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "active");
  } else {
    localStorage.removeItem("dark");
  }
});