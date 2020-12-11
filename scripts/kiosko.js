function start() {
    // setear links
    for (let i = 1; i <= 5; i++) {
        document.getElementsByClassName(`capsule_${i}`)[0].addEventListener('click', function() {
            window.location.href = (`capsula_${i}.html`);
        })
    }


    // emmiter effect
    function bubbleWidth() {
        return 20*(window.innerWidth/1920) + Math.floor((30*(window.innerWidth/1920) - 20*(window.innerWidth/1920)) * Math.random());
    }
    function bubblePosition() {
        return Math.random() * 50*(window.innerWidth/1920) + "px"
    }
    const capsule = document.getElementsByClassName('capsule');
    for (let i = 0; i < capsule.length; i++) {
        if (capsule[i].children[0].classList.contains('active')) {
            var active_capsule = `.capsule_${i+1}_container`
            
        }
    }
    function createBubble() {
        const item = document.querySelector(active_capsule)
        const bubble = document.createElement('img')
    
        // assign image
        bubble.src = 'images/bubble.png';
        bubble.classList.add('noDrag')
        
        // create bubble
        bubble.classList.add('bubbles')
        bubble.width = bubbleWidth();
        
        // set bubble position
        bubble.style.right = bubblePosition();
    
        // add bubble to document
        item.appendChild(bubble)
    
        // remove bubble
        setTimeout(() => {
            bubble.remove()
        }, 2000);
    }

    // repetidor de bubbles
    setInterval(createBubble, 133)
}