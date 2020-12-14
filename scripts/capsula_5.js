
// declarations
const capsule_5_line_1 = document.getElementById('capsule_5_line_1');
const capsule_5_end = document.getElementById('capsule_5_end');
const fresh = document.getElementById('fresh');
const c5_pack = document.getElementsByClassName('c5_pack')[0];
const c5_cig = document.getElementsByClassName('c5_cig')[0];
const c5_capsules_left = document.getElementsByClassName('c5_capsules_left')[0];
const c5_capsules_right = document.getElementsByClassName('c5_capsules_right')[0];
const titulo = document.getElementsByClassName('titulo')[0];
const subtitulo = document.getElementsByClassName('subtitulo')[0];
const descripcion_1 = document.getElementsByClassName('descripcion_1')[0];
const descripcion_2 = document.getElementsByClassName('descripcion_2')[0];
const c5_precio = document.getElementsByClassName('c5_precio')[0];
const marlboro = document.getElementsByClassName('marlboro')[0];
const next = document.getElementsByClassName('next')[0];
const next_deco = document.getElementsByClassName('next_deco')[0];

function start() {

    capsule_5_line_1.pause();
    capsule_5_line_1.currentTime = 0;
    capsule_5_line_1.play();

    setTimeout(() => {
        c5_pack.classList.add('opacity_1');
        c5_cig.classList.add('opacity_1');

        setTimeout(() => {
            marlboro.classList.add('marlobo_appear');
            setTimeout(() => {
                fresh.pause();
                fresh.volume = 0.5;
                fresh.currentTime = 0;
                fresh.play();
            }, 3500);
        }, 9000);

        // titulo appear
        setTimeout(() => {
            titulo.classList.add('titulo_appear');
            

            // desc 1 appear
            setTimeout(() => {
                descripcion_1.classList.add('descripcion_fade');

                // desc 2 appear
                setTimeout(() => {
                    descripcion_2.classList.add('descripcion_fade');

                    // precio appear
                    setTimeout(() => {
                        c5_precio.classList.add('precio_appear');

                        // subtitulo appear
                        setTimeout(() => {
                            subtitulo.classList.add('titulo_appear');
                        }, 2000);

                    }, 2000);// precio appear

                }, 4000);// desc 2 appear

            }, 14000);// desc 1 appear

        }, 200);// titulo appear

        capsule_5_line_1.addEventListener('ended', function(ev) {
            capsule_5_end.pause();
            capsule_5_end.currentTime = 0;
            capsule_5_end.play();
            next.classList.add('next_fade');
            next_deco.classList.add('next_fade');
        })
    }, 200);
} 