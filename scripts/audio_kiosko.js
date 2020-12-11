const line_4 = document.getElementById('line_4')

// VININEDO DE /INICIO
setTimeout(() => {
    line_4.pause();
    line_4.currentTime = 0;
    line_4.play();
}, 1000);


// TESTEANDO
// function reproducir() {
//     document.querySelector('.playbtn').remove();
//     document.querySelector('.overlay').remove();
//     setTimeout(() => {
//         line_4.pause();
//         line_4.currentTime = 0;
//         line_4.play();
//     }, 1000);
// }
