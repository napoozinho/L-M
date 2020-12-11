for (let i = 1; i <= 5; i++) {
    document.getElementsByClassName(`capsule_${i}`)[0].addEventListener('click', function() {
        window.location.href = (`capsula_${i}.html`);
    })
}