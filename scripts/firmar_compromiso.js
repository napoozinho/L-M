
// const capsule_5_line_1 = document.getElementById('capsule_5_line_1');
// const capsule_5_end = document.getElementById('capsule_5_end');
// const fresh = document.getElementById('fresh');
// const c5_pack = document.getElementsByClassName('c5_pack')[0];
// const c5_cig = document.getElementsByClassName('c5_cig')[0];
// const c5_capsules_left = document.getElementsByClassName('c5_capsules_left')[0];
// const c5_capsules_right = document.getElementsByClassName('c5_capsules_right')[0];
// const titulo = document.getElementsByClassName('titulo')[0];
// const subtitulo = document.getElementsByClassName('subtitulo')[0];
// const descripcion_1 = document.getElementsByClassName('descripcion_1')[0];
// const descripcion_2 = document.getElementsByClassName('descripcion_2')[0];
// const c5_precio = document.getElementsByClassName('c5_precio')[0];
// const marlboro = document.getElementsByClassName('marlboro')[0];
// const next = document.getElementsByClassName('next')[0];
// const next_deco = document.getElementsByClassName('next_deco')[0];

// declarations
const claps = document.getElementById('claps');
const compromiso_line_1 = document.getElementById('compromiso_line_1');
const compromiso_line_2 = document.getElementById('compromiso_line_2');
const compromiso_line_3 = document.getElementById('compromiso_line_3');
const compromiso_pack = document.getElementsByClassName('compromiso_pack')[0];
const compromiso_cig = document.getElementsByClassName('compromiso_cig')[0];
const titulo = document.getElementsByClassName('titulo')[0];
const subtitulo_1 = document.getElementsByClassName('subtitulo_1')[0];
const next_1 = document.getElementsByClassName('next_1')[0];
const next_1_deco = document.getElementsByClassName('next_1_deco')[0];

const subtitulo_2 = document.getElementsByClassName('subtitulo_2')[0];
const subtitulo_3 = document.getElementsByClassName('subtitulo_3')[0];
const next_2 = document.getElementsByClassName('next_2')[0];
const next_2_deco = document.getElementsByClassName('next_2_deco')[0];

const form_text = document.getElementsByClassName('form_text')[0];
const form_comentario = document.getElementById('form_comentario');
const form_submit = document.getElementsByClassName('form_submit')[0];
const form_submit_deco = document.getElementsByClassName('form_submit_deco')[0];

function start() {

    setTimeout(() => {
        compromiso_pack.classList.add('pack_appear');
        compromiso_cig.classList.add('cig_appear');

        // titulo appear
        setTimeout(() => {
            titulo.classList.add('titulo_appear');
            
            // subtitulo_1 appear
            setTimeout(() => {
                subtitulo_1.classList.add('titulo_appear');
                
                // next_1 appear
                setTimeout(() => {
                    next_1.classList.add('next_fade')
                    next_1_deco.classList.add('next_fade')
                }, 1000); // next_1 appear

            }, 1000);// subtitulo_1 appear

        }, 1000);// titulo appear
    }, 200);
} 

function fnc_next_1() {
    clap_start();
    setTimeout(() => {
        claps.pause();
        claps.volume = 0.5;
        claps.currentTime = 0;
        claps.play();
        setTimeout(() => {
            compromiso_line_1.pause();
            compromiso_line_1.currentTime = 0;
            compromiso_line_1.play();
        }, 500);
    }, 500);
    
    compromiso_line_1.addEventListener('ended', function(ev) {
        compromiso_line_2.pause();
        compromiso_line_2.currentTime = 0;
        compromiso_line_2.play();
        subtitulo_3.classList.add('titulo_appear');
    })

    // remove slide 1
    next_1.classList.remove('next_fade');
    next_1_deco.classList.remove('next_fade');
    next_1.classList.add('fade_out');
    next_1_deco.classList.add('fade_out');
    titulo.classList.remove('titulo_appear');
    subtitulo_1.classList.remove('titulo_appear');
    titulo.classList.add('fade_out');
    subtitulo_1.classList.add('fade_out');
    setTimeout(() => {
        next_1.remove();
        next_1_deco.remove();
        titulo.remove();
        subtitulo_1.remove();

        // preparing slide 2
        subtitulo_2.classList.remove('noDisplay');
        subtitulo_3.classList.remove('noDisplay');
        next_2.classList.remove('noDisplay');
        next_2_deco.classList.remove('noDisplay');

        // subitulo_2 appear
        setTimeout(() => {
            subtitulo_2.classList.add('titulo_appear');
            
            // subtitulo_3 appear
            setTimeout(() => {
                // subtitulo_3.classList.add('titulo_appear');
                
                // next_2 appear
                setTimeout(() => {
                    next_2.classList.add('next_fade')
                    next_2_deco.classList.add('next_fade')
                }, 1000); // next_2 appear

            }, 1000);// subtitulo_3 appear

        }, 100);// subitulo_2 appear

    }, 1000);
}

function fnc_next_2() {
    compromiso_line_1.pause();
    compromiso_line_2.pause();
    // remove slide 2
    next_2.classList.remove('next_fade');
    next_2_deco.classList.remove('next_fade');
    next_2.classList.add('fade_out');
    next_2_deco.classList.add('fade_out');
    subtitulo_2.classList.remove('titulo_appear');
    subtitulo_3.classList.remove('titulo_appear');
    subtitulo_2.classList.add('fade_out');
    subtitulo_3.classList.add('fade_out');
    setTimeout(() => {
        next_2.remove();
        next_2_deco.remove();
        subtitulo_2.remove();
        subtitulo_3.remove();

        // preparing slide 3
        form_text.classList.remove('noDisplay');
        form_comentario.classList.remove('noDisplay');
        form_submit_deco.classList.remove('noDisplay');
        form_submit.classList.remove('noDisplay');

        // form_text appear
        setTimeout(() => {
            compromiso_line_3.pause();
            compromiso_line_3.currentTime = 0;
            compromiso_line_3.play();
            form_text.classList.add('titulo_appear');
            
            // form_comentario appear
            setTimeout(() => {
                form_comentario.classList.add('titulo_appear');
            }, 1000);// form_comentario appear

        }, 100);// form_text appear

    }, 1000);
}