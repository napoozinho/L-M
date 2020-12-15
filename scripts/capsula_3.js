const next = document.getElementsByClassName('next')[0];
const next_deco = document.getElementsByClassName('next_deco')[0];
// slide 1 declarations
const slide_1 = document.getElementsByClassName('slide_1')[0];
const c3_pack_1 = document.getElementsByClassName('c3_pack_1')[0];
const c3_pack_2 = document.getElementsByClassName('c3_pack_2')[0];
const c3_pack_3 = document.getElementsByClassName('c3_pack_3')[0];
// slide 2 declarations
const slide_2 = document.getElementsByClassName('slide_2')[0];
const c3_details = document.getElementsByClassName('c3_details')[0];
const c3_capsules_2_left = document.getElementsByClassName('c3_capsules_2_left')[0];
const c3_pack = document.getElementsByClassName('c3_pack')[0];
const c3_cig = document.getElementsByClassName('c3_cig')[0];
const titulo = document.getElementsByClassName('titulo')[0];
const c3_capsules_2_right = document.getElementsByClassName('c3_capsules_2_right')[0];
const marlboro = document.getElementsByClassName('marlboro')[0];
// slide 3 declarations
const slide_3 = document.getElementsByClassName('slide_3')[0];
const c3_details_3 = document.getElementsByClassName('c3_details_3')[0];
const pack_left = document.getElementsByClassName('pack_left')[0];
const pack_center = document.getElementsByClassName('pack_center')[0];
const pack_right = document.getElementsByClassName('pack_right')[0];
const pack_red_texto = document.getElementsByClassName('pack_red_texto')[0];
const pack_lm_texto = document.getElementsByClassName('pack_lm_texto')[0];
const pack_blue_texto = document.getElementsByClassName('pack_blue_texto')[0];
const c3_texto = document.getElementsByClassName('c3_texto')[0];
const c3_marlboro = document.getElementsByClassName('c3_marlboro')[0];
// sonidos
const ice_3 = document.getElementById('ice_3');
const light = document.getElementById('light');
const capsule_3_line_1 = document.getElementById('capsule_3_line_1');
const capsule_3_line_2 = document.getElementById('capsule_3_line_2');
const capsule_3_line_2_5 = document.getElementById('capsule_3_line_2_5');
const capsule_3_line_3 = document.getElementById('capsule_3_line_3');
const capsule_3_end = document.getElementById('capsule_3_end');

const next_1 = document.getElementsByClassName('next_1')[0];
const next_1_deco = document.getElementsByClassName('next_1_deco')[0];

function start() {
    
    

    // SLIDE 1
    // slide pack 1
    setTimeout(() => {

        setTimeout(() => {
            capsule_3_line_1.pause();
            capsule_3_line_1.currentTime = 0;
            capsule_3_line_1.play();
        }, 1000);

        capsule_3_line_1.addEventListener('ended', function(ev) {

            setTimeout(() => {
                capsule_3_line_2.pause();
                capsule_3_line_2.currentTime = 0;
                capsule_3_line_2.play();
            }, 500);
            
            setTimeout(() => {
                // fade slide 1
                setTimeout(() => {
                    slide_1.classList.add('slide_fade');
                    // remove slide 1
                    setTimeout(() => {
                        slide_1.remove();

                        slide_2.classList.remove('noDisplay');
                        // reveal deco
                        setTimeout(() => {
                            c3_details.classList.add('deco_entry');
                            // reveal capsules
                            setTimeout(() => {
                                c3_capsules_2_left.classList.add('deco_entry');
                                // reveal pack, cig, and right content
                                setTimeout(() => {
                                    ice_3.pause();
                                    ice_3.currentTime = 0;
                                    ice_3.volume = 0.5;
                                    ice_3.play();
                                    c3_pack.classList.add('pack_cig_entry');
                                    c3_cig.classList.add('pack_cig_entry');
                                    titulo.classList.add('right_appear');
                                    c3_capsules_2_right.classList.add('right_appear');
                                    marlboro.classList.add('right_appear');
                                    // capsules right animation
                                    setTimeout(() => {
                                        light.pause();
                                        light.currentTime = 0;
                                        light.volume = 0.3;
                                        light.play();
                                        c3_capsules_2_right.classList.add('c3_capsules_2_right_animation');
                                        // titulo animation
                                        setTimeout(() => {
                                            titulo.classList.add('titulo_glow');

                                            
                                        }, 1000);// titulo animation
                                    }, 100);// capsules right animation
                                }, 100);// reveal pack, cig, and right content
                            }, 200);// reveal capsules
                        }, 200);// reveal deco

                    }, 1000);// remove slide 1
                }, 100);// fade slide 1
            }, 200);
        })

        c3_pack_1.classList.add('c3_pack_slide');
        // slide pack 2
        setTimeout(() => {
            c3_pack_2.classList.add('c3_pack_slide');
            // slide pack 3
            setTimeout(() => {
                c3_pack_3.classList.add('c3_pack_slide');
            }, 500);// slide pack 3
        }, 500);// slide pack 2
    }, 200);// slide pack 1



    capsule_3_line_2.addEventListener('ended', function(ev) {
        setTimeout(() => {

            capsule_3_line_2_5.pause();
            capsule_3_line_2_5.currentTime = 0;
            capsule_3_line_2_5.play();

            capsule_3_line_2_5.addEventListener('ended', function(ev) {
                // next slide appear
                next_1.classList.add('next_fade')
                next_1_deco.classList.add('next_fade')
            })

        }, 200);
    })


    



    capsule_3_line_3.addEventListener('ended', function(ev) {
            setTimeout(() => {next.classList.add('next_fade');
            next_deco.classList.add('next_fade');
            capsule_3_end.pause();
            capsule_3_end.currentTime = 0;
            capsule_3_end.play();
        }, 200);
    })
}


function fnc_next() {

    next_1.classList.remove('next_fade')
    next_1_deco.classList.remove('next_fade')
    next_1.classList.add('fade_out')
    next_1_deco.classList.add('fade_out')
    setTimeout(() => {
        next_1.remove();
        next_1_deco.remove();
    }, 1000);

    

    slide_2.classList.add('slide_fade');
    // fade slide 2
    setTimeout(() => {
        capsule_3_line_3.pause();
        capsule_3_line_3.currentTime = 0;
        capsule_3_line_3.play();

        // remove slide 2
        setTimeout(() => {
            slide_2.remove();

            slide_3.classList.remove('noDisplay');
            // reveal deco
            setTimeout(() => {
                c3_details_3.classList.add('deco_entry');

                // reveal pack center
                setTimeout(() => {
                    pack_center.classList.add('pack_entry');
                    // reveal pack center text
                    setTimeout(() => {
                        pack_lm_texto.classList.add('pack_texto_entry');
                        
                        // reveal pack left
                        setTimeout(() => {
                            pack_left.classList.add('pack_entry');
                            // reveal pack left text
                            setTimeout(() => {
                                pack_red_texto.classList.add('pack_texto_entry');
                                
                                // reveal pack right
                                setTimeout(() => {
                                    pack_right.classList.add('pack_entry');
                                    // reveal pack right text
                                    setTimeout(() => {
                                        pack_blue_texto.classList.add('pack_texto_entry');
                                        
                                        // bubble text and marlboro entry 
                                        setTimeout(() => {
                                            c3_texto.classList.add('c3_texto_y_marlobo_entry')
                                            c3_marlboro.classList.add('c3_texto_y_marlobo_entry')
                                        }, 1500);// bubble text and marlboro entry 

                                    }, 1500);// reveal pack right text
                                }, 1000);// // reveal pack right

                            }, 1500);// reveal pack left text
                        }, 3000);// // reveal pack left

                    }, 1000);// reveal pack center text
                }, 2000);// // reveal pack center

            }, 200);// reveal deco

        }, 1000);// remove slide 2
    }, 1000);// fade slide 2
}























