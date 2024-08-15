window.onload = function() {  
    const spinner = document.getElementById('loading');

    function timer() {
        spinner.classList.add('loaded');
    }

    setTimeout(timer, 3000);
}