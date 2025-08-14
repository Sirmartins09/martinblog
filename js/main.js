document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", () => {
    const likeButton = document.querySelector(".like-button");
    const likeCount = document.getElementById("like-count");
    let count = 0;

    likeButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que el enlace <a> se active
        count++;
        likeCount.textContent = count;
    });
});
