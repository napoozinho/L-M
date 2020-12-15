// const ice_1 = document.getElementById('ice_1');
const ice_2 = document.getElementById('ice_2');
const capsule_2_line_1 = document.getElementById('capsule_2_line_1');
const capsule_2_ended = document.getElementById('capsule_2_ended');
const cig = document.getElementsByClassName('c2_cig')[0];
const titulo = document.getElementsByClassName('titulo')[0];
const descripcion_1 = document.getElementsByClassName('descripcion_1')[0];
const descripcion_2 = document.getElementsByClassName('descripcion_2')[0];
const descripcion_3 = document.getElementsByClassName('descripcion_3')[0];
const marlboro = document.getElementsByClassName('marlboro')[0];
const next = document.getElementsByClassName('next')[0];
const next_deco = document.getElementsByClassName('next_deco')[0];

function start() {
    
    capsule_2_line_1.pause();
    capsule_2_line_1.currentTime = 0;
    capsule_2_line_1.play();

    setTimeout(() => {
        document.querySelector('.c1_pack').classList.add('opacity_1');
        document.querySelector('.c2_cig').classList.add('opacity_1');

        setTimeout(() => {
            cig.classList.add('c2_cig_animation_jump');
            ice_2.pause();
            ice_2.play();
            setTimeout(() => {
                cig.classList.remove('c2_cig_animation_jump');
                cig.classList.add('c2_cig_animation_rotate');
            }, 2000);
        }, 3000);

        setTimeout(() => {
            descripcion_1.classList.add('descripcion_fade');
            setTimeout(() => {
                titulo.classList.add('titulo_animation_slide')
                descripcion_2.classList.add('descripcion_fade');
                setTimeout(() => {
                    descripcion_3.classList.add('descripcion_fade');
                    setTimeout(() => {
                        titulo.classList.add('titulo_animation_slide')
                        // marlboro.classList.add('marlboro_animation_jump');
                        setTimeout(() => {
                            next.classList.add('next_fade');
                            next_deco.classList.add('next_fade');
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 2500);
        }, 3000);
        
        // setTimeout(() => {
        //     ice_1.pause();
        //     ice_1.currentTime = 0;
        //     ice_1.volume = 0.5;
        //     ice_1.play();
        //     setTimeout(() => {
        //         titulo.classList.add('titulo_animation_slide')
        //     }, 500);
        // }, 11000);

        capsule_2_line_1.addEventListener('ended', function(ev) {
            setTimeout(() => {
                capsule_2_end.pause();
                capsule_2_end.currentTime = 0;
                capsule_2_end.play();
            }, 300);
        })
    }, 200);
}