const line_4 = document.getElementById('line_4')

setTimeout(() => {
    line_4.pause();
    line_4.currentTime = 0;
    line_4.play();
}, 1000);