class Modal  {
    constructor(titre, texte) {
        this.titre = titre;
        this.text = texte;

    }
    init() {
        let creaDiv = document.createElement("div");
        creaDiv.id = "popup";
        document.body.append(creaDiv);

        let creaContent = document.createElement("div");
        creaContent.id = "modal-window";
        creaDiv.append(creaContent);

        let divTitre = document.createElement("div");
        divTitre.id = "divTitre";
        divTitre.innerHTML = this.titre;
        creaContent.append(divTitre);

        let divTexte = document.createElement("div");
        divTexte.id = "divTexte";
        divTexte.innerHTML = this.text;
        creaContent.append(divTexte);

        let divButton = document.createElement("div");
        divButton.id = "divButton";
        creaContent.append(divButton);

        let buttonAccept = document.createElement("button");
        buttonAccept.id = "buttonAccept";
        buttonAccept.innerHTML = "Accept";

        let buttonDecline = document.createElement("button");
        buttonDecline.id = "buttonDecline";
        buttonDecline.innerHTML = "Decline";

        divButton.append(buttonAccept);
        divButton.append(buttonDecline);
    };

    close() {
        document.body.lastChild.remove();
    }
}

let buttonModal = document.getElementById("modal");

buttonModal.addEventListener("click", ()=> {
    let blabla = new Modal("Fenêtre modal", "Acceptez-vous que nous enregistrions des données sur cet appareil ?");
    blabla.init();

    buttonAccept.addEventListener("click", function () {
        blabla.close();
    })
    buttonDecline.addEventListener("click", function () {
        blabla.close();
    })
})

