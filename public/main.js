//_------------------------ Form alta
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  let nombre = document.querySelector('#nombre').value;
  if (nombre === '') {
      alert('El campo no debe estar vacío');
      return;
  } else if (nombre.length < 2 || nombre.length > 15) {
      alert('El campo debe tener entre 2 y 15 caracteres');
      return;
  } else if (!/^[\u00C0-\u00FFa-zA-Z\s]+$/.test(nombre)) {
      alert('El campo solo debe aceptar caracteres en español');
      return;
  }

  let stock = document.querySelector('#stock').value;
  if (stock === '') {
      alert('El campo no debe estar vacío');
      return;
  }

  let marca = document.querySelector('#marca').value;
  if (marca === '') {
      alert('Debe elegir una opción del campo de selección');
      return;
  }

  let categoria = document.querySelector('#categoria').value;
  if (categoria === '') {
      alert('Debe elegir una categoría del campo de selección y el campo no debe estar vacío');
      return;
  }

  let descripcion = document.querySelector('#descripcion').value;
  if (!/^[\u00C0-\u00FFa-zA-Z\s]+$/.test(descripcion)) {
      alert('El campo solo debe aceptar caracteres en español');
      return;
  } else if (descripcion.length < 5 || descripcion.length > 30) {
      alert('El campo debe tener entre 5 y 30 caracteres');
      return;
  }

  let descripcionLarga = document.querySelector('#descripcion-larga').value;
  if (!/^[\u00C0-\u00FFa-zA-Z\s]+$/.test(descripcionLarga)) {
      alert('El campo solo debe aceptar caracteres en español');
      return;
  } else if (descripcionLarga.length < 5 || descripcionLarga.length > 1000) {
      alert('El campo debe tener entre 5 y 1000 caracteres');
      return;
  }

  document.getElementById("precio").addEventListener("input", function(event) {
      let precio = event.target.value;
      if (isNaN(precio)) {
          event.target.value = precio.replace(/[^0-9]/g, "");
          return;
      } else {
          let envioSinCargo = document.getElementById("envio-sin-cargo");
          let envioSinCargoLabel = document.querySelector("label[for='envio-sin-cargo']");
          if (parseInt(precio) >= 3000) {
              envioSinCargo.disabled = false;
              envioSinCargo.style.display = "inline";
              envioSinCargoLabel.style.display = "inline";
          } else {
              envioSinCargo.disabled = true;
              envioSinCargo.checked = false;
              envioSinCargo.style.display = "none";
              envioSinCargoLabel.style.display = "none";
          }
      }
  });

  let edad = document.querySelector('#edad').value;
  if (edad === '') {
    alert('El campo no debe estar vacío');
    return;
  }

  let foto = document.querySelector('#foto').files[0];
  if (!foto) {
    alert('El campo no debe estar vacío');
    return;
  } else if (!/\.(img|png|svg|jpg)$/i.test(foto.name)) {
    alert('Solo se aceptan imágenes en formato img, png, svg o jpg');
    return;
  } else {
    alert('Formulario enviado correctamente');
    event.target.reset();
    return;
  }
});

//----------------- form contacto

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


//------------------navbar

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});
