
// declarations
const capsule_4_line_1 = document.getElementById('capsule_4_line_1');
const capsule_4_end = document.getElementById('capsule_4_end');
const c4_pack = document.getElementsByClassName('c4_pack')[0];
const c4_cig = document.getElementsByClassName('c4_cig')[0];
const c4_capsules_left = document.getElementsByClassName('c4_capsules_left')[0];
const c4_capsules_right = document.getElementsByClassName('c4_capsules_right')[0];
const titulo = document.getElementsByClassName('titulo')[0];
const descripcion_1 = document.getElementsByClassName('descripcion_1')[0];
const descripcion_2 = document.getElementsByClassName('descripcion_2')[0];
const descripcion_3 = document.getElementsByClassName('descripcion_3')[0];
const descripcion_4 = document.getElementsByClassName('descripcion_4')[0];
const next = document.getElementsByClassName('next')[0];
const next_deco = document.getElementsByClassName('next_deco')[0];

function start() {

    capsule_4_line_1.pause();
    capsule_4_line_1.currentTime = 0;
    capsule_4_line_1.play();

    setTimeout(() => {
        c4_pack.classList.add('opacity_1')
        c4_cig.classList.add('opacity_1')

        // titulo appear
        setTimeout(() => {
            titulo.classList.add('titulo_appear')

            // desc 1 appear
            setTimeout(() => {
                descripcion_1.classList.add('descripcion_fade')

                // desc 2 appear
                setTimeout(() => {
                    descripcion_2.classList.add('descripcion_fade')

                    // desc 3 appear
                    setTimeout(() => {
                        descripcion_3.classList.add('descripcion_fade')

                        // desc 4 appear
                        setTimeout(() => {
                            descripcion_4.classList.add('descripcion_fade')

                        }, 4500);// desc 4 appear

                    }, 5000);// desc 3 appear

                }, 7000);// desc 2 appear

            }, 3500);// desc 1 appear

        }, 2500);// titulo appear

        capsule_4_line_1.addEventListener('ended', function(ev) {
            capsule_4_end.pause();
            capsule_4_end.currentTime = 0;
            capsule_4_end.play();
            next.classList.add('next_fade');
            next_deco.classList.add('next_fade');
        })
    }, 200);
} 