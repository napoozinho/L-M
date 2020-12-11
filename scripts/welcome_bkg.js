function binary() {
    return Math.round(Math.random())
}
function bubbleSlow() {
    return Math.floor(Math.random() * 51 * (window.innerWidth/1920)) + 50 * (window.innerWidth/1920);
}
function bubbleFast() {
    return Math.floor(Math.random() * 11 * (window.innerWidth/1920)) + 30 * (window.innerWidth/1920);
}
function bubblePosition() {
    return Math.random() * window.innerWidth/3 + "px"
}


function check() {
    if(isReady) { 
        clearInterval(listener_welcome);
        function createBubble() {
            const bkg = document.querySelector('.welcome_container')
            const bubble = document.createElement('img')
        
            // assign image
            bubble.src = 'images/bubble.png';
            bubble.classList.add('noDrag')
            
            // create slow bubble
            if(binary()) {
                bubble.classList.add('bubbles_slow')
                bubble.width = bubbleSlow();
            }
            // create fast bubble
            else {
                bubble.classList.add('bubbles_fast')
                bubble.width = bubbleFast();
            }
            
            // set bubble to the left
            if(binary()) {
                bubble.style.left = bubblePosition();
            }
            // set bubble to the right
            else {
                bubble.style.right = bubblePosition();
            }
        
            // add bubble to document
            bkg.appendChild(bubble)
        
            // remove bubble
            setTimeout(() => {
                bubble.remove()
            }, 15000);
        }
        
        // repetidor de bubbles
        var bubbleInterval = setInterval(createBubble, 800)

        // eliminar repetidor
        line_3.addEventListener('ended', function(ev){
            clearInterval(bubbleInterval);
        });
    }
}
var listener_welcome = setInterval(check, 500)


