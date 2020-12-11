function binary() {
    return Math.round(Math.random())
}
function bubbleTransition_1() {
    return Math.floor(Math.random() * 91 * (window.innerWidth/1920)) + 100 * (window.innerWidth/1920);
}
function bubbleTransition_2() {
    return Math.floor(Math.random() * 51 * (window.innerWidth/1920)) + 50 * (window.innerWidth/1920);
}
function zIndex() {
    return Math.floor(Math.random() * (10 - 7 + 1)) + 7;
}
function bubblePositionTransition() {
    let aux = Math.floor(Math.random() * 100) + 1;
    if(aux > 0 && aux <= 15) {
        return Math.random() * window.innerWidth/3 + "px"
    }
    if(aux > 85 && aux <= 100) {
        return Math.floor(Math.random() * (window.innerWidth - (window.innerWidth*(2/3)) + 1)) + (window.innerWidth*(2/3)) + "px"
    }
    if(aux > 15 && aux <= 85) {
        return Math.floor(Math.random() * ((window.innerWidth*(2/3)) - (window.innerWidth/3) + 1)) + (window.innerWidth/3) + "px";
    }
}

line_4.addEventListener('ended', function(ev){
    setTimeout(() => {

        const bkg = document.querySelector('.welcome_container');

        (function myLoop(i) {
            setTimeout(function() {
                const bubble = document.createElement('img')
                // assign image
                bubble.src = 'images/bubble.png';
                bubble.classList.add('noDrag')
                
                // create slow bubble
                if(binary()) {
                    bubble.classList.add('bubbles_transition_1')
                    bubble.width = bubbleTransition_1();
                }
                // create fast bubble
                else {
                    bubble.classList.add('bubbles_transition_2')
                    bubble.width = bubbleTransition_2();
                }

                // set bubble position (15% 70% 15%)
                bubble.style.left = bubblePositionTransition();
            
                // apply random z-index
                bubble.style.zIndex = zIndex();

                // add bubble to document
                bkg.appendChild(bubble)
            
                // remove bubble
                setTimeout(() => {
                    bubble.remove()
                }, 3000);
              if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
            }, 20) // spawn delay
        })(83); 

    }, 1000);
});

