window.onload = function() {
    loadHeader();
    loadFooter();
    loadContent('home.html'); // Carga inicial por defecto
};

function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            initGallery(); 
        });
}

function initGallery() {
    const tips = document.querySelectorAll('.tip-item');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    function showTip(index) {
        tips.forEach((tip, i) => {
            tip.classList.toggle('active', i === index);
        });
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? tips.length - 1 : currentIndex - 1;
        showTip(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex === tips.length - 1) ? 0 : currentIndex + 1;
        showTip(currentIndex);
    });

    showTip(currentIndex); 
}
