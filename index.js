document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos de los iconos de toggle
    var whiteToggle = document.getElementById("white");
    var blackToggle = document.getElementById("black");

    // Agregar event listener para el evento 'click' al icono whiteToggle
    whiteToggle.addEventListener("click", function() {
        // Ocultar whiteToggle
        whiteToggle.style.display = "none";
        // Mostrar blackToggle
        blackToggle.style.display = "inline";

        // Cambiar los estilos de la página
        document.body.classList.remove("dark-mode");
    });

    // Agregar event listener para el evento 'click' al icono blackToggle
    blackToggle.addEventListener("click", function() {
        // Ocultar blackToggle
        blackToggle.style.display = "none";
        // Mostrar whiteToggle
        whiteToggle.style.display = "inline";

        // Cambiar los estilos de la página
        document.body.classList.add("dark-mode");
    });
});
    
document.addEventListener("DOMContentLoaded", function() {
    // Función para verificar si una cadena contiene números
    function containsNumbers(input) {
        return /\d/.test(input);
    }

    // Función para verificar si el correo electrónico tiene un dominio real
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Función para validar el formulario
    function validateForm(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los valores de los campos del formulario
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var age = document.getElementById("age").value;

        if (age < 18) {
            alert("Usted es menor y no puede acceder a nuestros servicios");
            return;
        }

        // Verificar si el nombre y el apellido contienen números
        if (containsNumbers(name)) {
            alert("El nombre no puede contener números.");
            return;
        }

        // Verificar si el correo electrónico tiene un dominio real
        if (!isValidEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Si la validación es exitosa, enviar el formulario
        alert("¡Formulario válido! Enviando solicitud...");
    }

    // Agregar un event listener para el evento submit del formulario
    document.getElementById("contact").addEventListener("submit", validateForm);
});


    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var backButton = document.getElementById("back-to-top");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backButton.classList.add("show");
        } else {
            backButton.classList.remove("show");
        }
    }
    
    document.getElementById("back-to-top").addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    