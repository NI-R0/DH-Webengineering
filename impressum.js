const retBtn = document.getElementById("return_btn")

retBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open("/index.html", "_self");
    // window.scrollTo(0, 0);
})