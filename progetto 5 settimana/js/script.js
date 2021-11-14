import { FunzioneZ } from "./FunzioneZ.js"

var salva = document.querySelector('#salva')

var contenitore = document.querySelector('#text-container')
var campoText = document.querySelector('#campo-text')
var nuovo = document.querySelector('#nuovo')
let utenti = JSON.parse(localStorage.getItem('testi'))
if (utenti) {
    utenti.forEach(el => {
        FunzioneZ(contenitore, el.titolo)



    });
}


class Testo {
    constructor(title, content) {
        this.titolo = title
        this.contenuto = content
    }
}
nuovo.addEventListener('click', function(ev) {


    ev.preventDefault()
    campoText.reset()

})
campoText.addEventListener('submit', function(e) {

    e.preventDefault()
    var contenuto = tinymce.activeEditor.getContent();
    var testo = new Testo(title.value, contenuto)

    if (!localStorage.getItem('testi')) {

        localStorage.setItem('testi', JSON.stringify([testo]))

    } else {






        if (testo) {
            let utenti = JSON.parse(localStorage.getItem('testi'))


            utenti.push(testo)
            localStorage.setItem('testi', JSON.stringify(utenti))
                //param

            FunzioneZ(contenitore, testo.titolo)

        }


    }
})