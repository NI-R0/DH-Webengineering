console.log("script.js loaded successfully ...");

//SCROLL TO TOP BUTTON


const scrollBtn = document.getElementById("to-top-button");
scrollBtn.style.setProperty("display", "none")

scrollBtn.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
        top: 0, left: 0, behavior: "smooth"
    });
})

const btn = document.getElementById("arrow");
btn.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
        top: 0, left: 0, behavior: "smooth"
    });
})

const headerElement = document.getElementById("top")

window.addEventListener("scroll", () => {
    var topDist = headerElement.getBoundingClientRect();
    
    if(topDist.top < -100){
        scrollBtn.style.removeProperty("display")
        scrollBtn.style.setProperty("animation", "einblenden 1.5s")
        scrollBtn.style.setProperty("-moz-animation", "einblenden 1.5s")
        scrollBtn.style.setProperty("-webkit-animation", "einblenden 1.5se")
        scrollBtn.style.setProperty("-o-animation", "einblenden 1.5s")
    }
    else{
        scrollBtn.style.setProperty("display", "none")
    }
})

//------------


const mapLink = document.getElementById("div_location")

mapLink.addEventListener("click", () => {
    window.open("https://www.google.com/maps/place/Durlacher+Allee+21,+76131+Karlsruhe/@49.0081573,8.4206595,17z/data=!3m1!4b1!4m5!3m4!1s0x479706301e613111:0x97bbacdce32c62ea!8m2!3d49.0081573!4d8.4228482");
})