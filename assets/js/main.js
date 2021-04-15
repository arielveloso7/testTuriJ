(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation');
    const inputs = document.querySelectorAll('#formulario input');

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{2,30}$/,
        apellidos: /^[a-zA-ZÀ-ÿ\s]{2,30}$/,
        password: /^.{2,12}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const validarForm = (e) => {
        switch (e.target.name) {
            case 'nombre':
                validarCampo(expresiones.nombre, e.target, 'nombre');
                break;

            case 'apellidos':
                validarCampo(expresiones.apellidos, e.target, 'apellidos');
                break;

            case 'password':
                validarCampo(expresiones.password, e.target, 'password');
                break;

            case 'email':
                validarCampo(expresiones.email, e.target, 'email');
                break;
        }
    }

    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`${campo}`).classList.remove('incorrecto');
            document.querySelector(`#grupo_${campo} p`).classList.remove('input-error-activo');
        } else {
            document.getElementById(`${campo}`).classList.add('incorrecto');
            document.querySelector(`#grupo_${campo} p`).classList.add('input-error-activo');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('keyup', validarForm);
        input.addEventListener('blur', validarForm);
    })


    Array.prototype.slice.call(forms)
        .forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })

})()