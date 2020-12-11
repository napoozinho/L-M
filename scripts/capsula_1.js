const ice_1 = document.getElementById('ice_1');
const ice_2 = document.getElementById('ice_2');
const capsule_1_line_1 = document.getElementById('capsule_1_line_1');
const c1_nuevo = document.getElementsByClassName('c1_nuevo')[0];
const descripcion_1 = document.getElementsByClassName('descripcion_1')[0];
const descripcion_2 = document.getElementsByClassName('descripcion_2')[0];
const descripcion_3 = document.getElementsByClassName('descripcion_3')[0];
const next = document.getElementsByClassName('next')[0];
const next_deco = document.getElementsByClassName('next_deco')[0];

function start() {
    
    capsule_1_line_1.pause();
    capsule_1_line_1.currentTime = 0;
    capsule_1_line_1.play();

    setTimeout(() => {
        document.querySelector('.c1_pack').classList.add('opacity_1')
        document.querySelector('.c1_cig').classList.add('opacity_1')

        setTimeout(() => {
            descripcion_1.classList.add('descripcion_fade')
            ice_1.pause();
            ice_1.currentTime = 0;
            ice_1.play();
            setTimeout(() => {
                descripcion_2.classList.add('descripcion_fade')
                setTimeout(() => {
                    descripcion_3.classList.add('descripcion_fade')
                    setTimeout(() => {
                        next.classList.add('next_fade');
                        next_deco.classList.add('next_fade');
                    }, 3000);
                }, 3000);
            }, 5000);
        }, 3500);
        
    }, 200);
}