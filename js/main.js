document.addEventListener('DOMContentLoaded', () => {

    // Lógica del menú de hamburguesa
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Lógica para los botones de "Me gusta"
    const likeButtons = document.querySelectorAll('.like-button');
    
    likeButtons.forEach(button => {
        // Obtiene el ID del artículo del atributo data-id
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

});