console.log(SITE_TRANSLATIONS);


// Intercettare la pagina appena caricata
window.addEventListener("DOMContentLoaded", () => {
    /**
     * Traduci il sito con la lingua dell'utente.
     */
    const userLanguage = navigator.language.split("-")[0];

    const langMapping = {
        "ru": "ru_RU",
        "es": "es_ES",
        "en": "en_UK",
        "fr": "fr_FR",
    }

    console.log("Lingua dell'utente:", userLanguage);

    translateWebsite(SITE_TRANSLATIONS[langMapping[userLanguage]]);

    /**
     * Seleziona tutti i pulsanti delle lingue e poi 
     * traduci il sito con la funzione translateWebsite passando
     * come parametro l'oggetto della traduzione
     */
    const langButtons = document.querySelectorAll(".btn-lang-selector");

    console.log(langButtons);

    langButtons.forEach(btn => {
        console.log(btn);

        btn.addEventListener("click", (e) => {
            // Otteniamo la "lang-key" selezionata
            const langKey = btn.getAttribute("meta-lang")

            // Modifica attributo "lang" del tag HTML
            document.querySelector("html").setAttribute("lang", langKey)

            console.log("Hai selezionato la lingua: ", langKey);

            // Andiamo a ottenere la traduzione per quella lingua
            const TRANSLATION_LANG = SITE_TRANSLATIONS[langKey]

            console.log(TRANSLATION_LANG)

            // Avvio la funzione di traduzione
            translateWebsite(TRANSLATION_LANG);
        })
    })

    // Funzione di traduzione
    function translateWebsite(TRANSLATION_LANG) {
        /** Applicare le traduzioni alla pagina HTML
          * Per poter applicare le traduzioni, devo prima
          * selezionare tutto il contenuto che devo tradurre
          * dentro javascript
          */

        // Traduzione header
        const headerNavLinks = document
            .querySelectorAll("header .wrapper nav li");

        console.log(TRANSLATION_LANG["header"]["menu"])
        console.log(Object.values(TRANSLATION_LANG["header"]["menu"]))

        headerNavLinks.forEach((link, index) => {
            const translationHeaderMenu = Object.values(TRANSLATION_LANG["header"]["menu"]);

            link.innerHTML = translationHeaderMenu[index];
        })

        // Traduzione sezione 1
        const sectionOne = document.querySelector("#main-hero-section");

        sectionOne.querySelector(".hero-title h2").textContent = TRANSLATION_LANG["body"]["section1"]["title"];
        sectionOne.querySelector(".hero-actions #btn1").textContent = TRANSLATION_LANG["body"]["section1"]["button1"];
        sectionOne.querySelector(".hero-actions #btn2").textContent = TRANSLATION_LANG["body"]["section1"]["button2"];

        console.log(sectionOne.querySelector(".hero-title h2"));

        // Traduzione sezione 2
        const sectionTwo = document.querySelector("#sezione-showgallery");

        sectionTwo.querySelector(".title h2").textContent = TRANSLATION_LANG["body"]["section2"]["title"];
    }

});