$.ajax({
    url: '/assets/media.json'
}).done(function(data) {
    console.log(data)


    var video = data.video

    var cartella = 'video/'

    video.forEach(function(el) {
        var listaVideo = document.getElementById('listaVideo')

        var percorsoVideo = cartella + el.file

        var bottone = document.createElement('button')
        bottone.setAttribute('data-src', percorsoVideo)
        bottone.innerText = el.title

        bottone.addEventListener('click', function(e) {
            e.preventDefault()
            var myvideo = document.querySelector("#myvideo");
            var src = bottone.getAttribute('data-src')
            console.log(src)
            myvideo.src = src
            myvideo.load()
        })


        listaVideo.appendChild(bottone)
    })
})
$.ajax({
    url: '/assets/media.json'
}).done(function(data) {
    console.log(data)


    var audio = data.audio

    var cartella = 'audio/'

    audio.forEach(function(el) {
        var listaAudio = document.getElementById('listaAudio')

        var percorsoAudio = cartella + el.file

        var bottone = document.createElement('button')
        bottone.setAttribute('data-src', percorsoAudio)
        bottone.innerText = el.title

        bottone.addEventListener('click', function(e) {
            e.preventDefault()
            var myaudio = document.querySelector("#myaudio");
            var src = bottone.getAttribute('data-src')
            console.log(src)
            myaudio.src = src
            myaudio.load()
        })


        listaAudio.appendChild(bottone)
    })
})