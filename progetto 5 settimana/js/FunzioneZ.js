export function FunzioneZ(contenitore, testoTitolo) {
    var div = document.createElement("div")
    div.innerHTML = "<button class='eliminab'><i class='fa fa-times-circle'></i></button><p>" + testoTitolo + '</p>'
    var tastoElimina = div.querySelector('.eliminab')

    tastoElimina.addEventListener('click', function() {
        let utenti = JSON.parse(localStorage.getItem('testi'))
        console.log('primo', utenti)
        utenti = utenti.filter(el => el.titolo != this.nextSibling.innerHTML)
        console.log(this.nextSibling.innerHTML)
        localStorage.setItem('testi', JSON.stringify(utenti))
            //console.log(this.nextSibling)
        div.remove()
            //utenti.filter(el => el.title !=)
    })

    contenitore.append(div)
    div.addEventListener('click', function(eve2) {
        eve2.preventDefault()
        let utenti = JSON.parse(localStorage.getItem('testi'))


        var titleInput = document.querySelector('#title')
        titleInput.value = testoTitolo
        utenti.forEach(el => {


            tinymce.activeEditor.setContent(el.contenuto);
        });




    })
} //param