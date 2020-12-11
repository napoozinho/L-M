var texto;
var mr_open = document.querySelector('.mr_open');
var mr_open_cel = document.querySelector('.mr_open_cel');
var empecemos = document.querySelector('.empecemos');
var welcome_container = document.querySelector('.welcome_container');
var video_container = document.getElementById('video');
var overlay = document.querySelector('.overlay');
const skip = document.querySelector('.skip');

// mostrar primer texto
function check() {
    if(isReady) { 
        clearInterval(listener_transition);
        texto = document.querySelector('.mr_open_text_1')
        texto.classList.add('transition')
        mr_open_cel.classList.add('transition_cel')
    }
}
var listener_transition = setInterval(check, 500)

// mostrar segundo segundo
line_1.addEventListener('ended', function(ev){
    // console.log("line_1 Ended");
    skip.classList.remove('noDisplay');
    
    cambiarTexto();
});
function cambiarTexto() {
    texto.classList.remove('transition')
    setTimeout(() => {
        mr_open.src = 'images/mr_open_1.png'
        mr_open_cel.classList.add('noDisplay')
        texto.src = 'images/text_1.png'
        texto.alt = 'MIRÁ LA NUEVA PROPUESTA L&M, RECORRÉ LAS CÁPSULAS, REFRESCÁ EL COMPROMISO L&M, PARTICIPÁ DEL SORTEO'
        texto.classList.remove('mr_open_text_1')
        texto.classList.add('mr_open_text_2')
        texto.classList.add('transition')
        skip.classList.add('skip_fade');
    }, 700);
}

// mostrar tercer texto y nuevo mr open
line_2.addEventListener('ended', function(ev){
    // console.log("line_2 Ended");
    texto.classList.remove('transition')
    
    setTimeout(() => {
        texto.src = 'images/text_2.png'
        texto.alt = 'TE SUGERIMOS QUE PARA TENER UNA MEJOR EXPERIENCIA, GIRES EL CELULAR Y LO UTILICES DE FORMA HORIZONTAL.'
        texto.classList.remove('mr_open_text_2')
        texto.classList.add('mr_open_text_3')
        texto.classList.add('transition')
    }, 700);
});

// mostrar "empecemos"
line_3.addEventListener('ended', function(ev){
    // console.log("line_3 Ended");
    empecemos.classList.remove('noDisplay')
    
    setTimeout(() => {
        empecemos.classList.add('transition_empecemos')
    }, 1000);
});


line_4.addEventListener('ended', function(ev){
    setTimeout(() => {
        skip.remove();
        overlay.classList.add('overlay_darken');
    }, 2000);
    setTimeout(() => {
        // console.log("line_4 Ended");
        line_1.pause();
            line_2.pause();
            line_3.pause();
            line_4.pause();
            wind_1.pause();
            wind_2.pause();
            ice_1.pause();
            ice_2.pause();
            music.pause();
        // esconder todo
        welcome_container.classList.add('noDisplay');
        // insertar video
        video_container.innerHTML = "<video id=\"video_file\" src=\"http://files.encendercomunicacion.com/videos/videol&m.mp4\"style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" frameborder=\"0\" autoplay fullscreen allowfullscreen controls></video>"
        setTimeout(() => {
            document.getElementById('video_file').addEventListener('ended', function (ev) {
                window.location.href = ("kiosko.html");
            })
        }, 500);
    }, 3000);
});

function skipToVideo() {
    line_1.pause();
    line_2.pause();
    line_3.pause();
    line_4.pause();
    wind_1.pause();
    wind_2.pause();
    ice_1.pause();
    ice_2.pause();
    music.pause();
    setTimeout(() => {
        overlay.classList.add('overlay_darken');
        skip.remove();
        setTimeout(() => {
            welcome_container.classList.add('noDisplay');
            // video_container.innerHTML = "<div id=\"video_file\" style=\"width:100%; height:0; position: relative; padding-bottom:56.25%\"><iframe src=\"//neulandtv-argentina.videomarketingplatform.co/v.ihtml/player.html?token=f6dae4814f51f65742d091811db61f0d&source=embed&photo%5fid=65502826&autoPlay=1\" style=\"width:100%; height:100%; position: absolute; top: 0; left: 0;\" frameborder=\"0\" border=\"0\" scrolling=\"no\" mozallowfullscreen=\"1\" webkitallowfullscreen=\"1\" allowfullscreen=\"1\" allow=\"autoplay; fullscreen\"></iframe></div>"

            video_container.innerHTML = "<video id=\"video_file\" src=\"http://files.encendercomunicacion.com/videos/videol&m.mp4\"style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" frameborder=\"0\" autoplay fullscreen allowfullscreen controls></video>"
            setTimeout(() => {
                document.getElementById('video_file').addEventListener('ended', function (ev) {
                    window.location.href = ("kiosko.html");
                })
            }, 500);
        }, 1000);
    }, 250);
}