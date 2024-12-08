const panels = document.querySelectorAll(".panel");

panels.forEach( panel =>{
    panel.addEventListener("click", () => {

        remoActive();
        panel.classList.add("active");
    });
})

function remoActive(){
    panels.forEach( panel => {
        panel.classList.remove("active");
    })
}