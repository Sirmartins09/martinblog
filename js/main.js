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

// Espera a que el documento HTML se cargue por completo
document.addEventListener('DOMContentLoaded', () => {
    
    // Selecciona todos los botones con la clase 'like-button'
    const likeButtons = document.querySelectorAll('.like-button');
    
    // Itera sobre cada botón para agregarle funcionalidad
    likeButtons.forEach(button => {
        // Obtiene el ID del artículo a partir del atributo data-id
        const postId = button.closest('.post').getAttribute('data-id');
        
        // Verifica si ya hay un contador guardado en el LocalStorage
        let likesCount = localStorage.getItem(`likes-${postId}`);
        
        // Si no existe, inicializa el contador en 0
        if (!likesCount) {
            likesCount = 0;
            localStorage.setItem(`likes-${postId}`, likesCount);
        }
        
        // Actualiza el texto del botón con el contador actual
        button.textContent = `Me gusta (${likesCount})`;
        
        // Añade un 'escuchador de eventos' para el clic del botón
        button.addEventListener('click', () => {
            // Incrementa el contador
            likesCount++;
            
            // Actualiza el texto del botón
            button.textContent = `Me gusta (${likesCount})`;
            
            // Guarda el nuevo valor en el LocalStorage
            localStorage.setItem(`likes-${postId}`, likesCount);
        });
    });

    // Código para el menú de hamburguesa (si lo tienes en el mismo archivo)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

});
