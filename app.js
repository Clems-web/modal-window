class modal  {
    constructor(texte) {
        this.text = texte;
    }
    close() {
        
    }
}

let buttonModal = document.getElementById("modal");

buttonModal.addEventListener("click", ()=> {
    let creaDiv = document.createElement("div");
    creaDiv.id = "popup";
    creaDiv.style.width = "100%";
    creaDiv.style.height = "100vh";
    creaDiv.style.background = "dimgrey";
    creaDiv.style.opacity = "0.5";
    creaDiv.style.position = "absolute";
    creaDiv.style.zindex = "10";
    creaDiv.style.left = "0";
    creaDiv.style.top = "0";




    document.body.append(creaDiv);
})
