const line_1 = document.getElementById('line_1')
const line_2 = document.getElementById('line_2')
const line_3 = document.getElementById('line_3')
const line_4 = document.getElementById('line_4')

const wind_1 = document.getElementById('wind_1')
const wind_2 = document.getElementById('wind_2')

const ice_1 = document.getElementById('ice_1')
const ice_2 = document.getElementById('ice_2')

const music = document.getElementById('music')



// Reproducir primer audio
function check() {
    if(isReady) { 
        // console.log("AUDIO START")
        music.pause();
        music.currentTime = 0;
        music.volume = 0.05;
        music.play();
        clearInterval(listener_audio);
        setTimeout(() => {
            line_1.pause();
            line_1.currentTime = 0;
            line_1.play();
        }, 500);
    }
}
var listener_audio = setInterval(check, 500)

// Reproducir segundo audio
line_1.addEventListener('ended', function(ev){
    // console.log("line_1 Ended");
    setTimeout(() => {
        line_2.pause();
        line_2.currentTime = 0;
        line_2.play();

        setTimeout(() => {
            ice_1.pause();
            ice_1.currentTime = 0;
            ice_1.volume = 0.7;
            ice_1.play()
        }, 2000);
    }, 1000);
});

// Reproducir primer tercer
line_2.addEventListener('ended', function(ev){
    // console.log("line_2 Ended");
    setTimeout(() => {
        line_3.pause();
        line_3.currentTime = 0;
        line_3.play();
        wind_2.pause();
        wind_2.currentTime = 0;
        wind_2.volume = 0.5;
        wind_2.play();
        setTimeout(() => {
            ice_2.pause();
            ice_2.currentTime = 0;
            ice_2.volume = 0.7;
            ice_2.play()
        }, 8000);
    }, 1000);
});


line_3.addEventListener('ended', function(ev){
    // console.log("line_3 Ended");
    setTimeout(() => {
        line_4.pause();
        line_4.currentTime = 0;
        line_4.play();
        wind_1.pause();
        wind_1.currentTime = 0;
        wind_1.play();
    }, 1000);
});
