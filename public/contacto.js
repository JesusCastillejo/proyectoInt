const form = document.querySelector('#FormDos');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
        alert('El campo de nombre no puede estar vacío.');
        return;
    }
    if (nameValue.length < 2 || nameValue.length > 15) {
        alert('El nombre debe tener entre 2 y 15 caracteres.');
        return;
    }
    if (!/^[\u00C0-\u017Fa-zA-Z\s]+$/.test(nameValue)) {
        alert('El nombre solo debe contener caracteres en español.');
        return;
    }

    const phoneInput = document.querySelector('#phone');
    const phoneValue = phoneInput.value.trim();
    if (!/^\d+$/.test(phoneValue)) {
        alert('El campo de teléfono solo debe contener números.');
        return;
    }

    const emailInput = document.querySelector('#email');
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        alert('El campo de correo electrónico no puede estar vacío.');
        return;
    }
    if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) {
        alert('Por favor, introduce una dirección de correo electrónico válida.');
        return;
    }

    const commentInput = document.querySelector('#comment');
    const commentValue = commentInput.value.trim();
    if (!/^[\u00C0-\u017Fa-zA-Z\s]+$/.test(commentValue)) {
        alert('El comentario solo debe contener caracteres en español.');
        return;
    }
    if (commentValue.length > 2000) {
        alert('El comentario no debe tener más de 2000 caracteres.');
        return;
    }

    alert('¡Validación exitosa!');
    form.reset();
});
