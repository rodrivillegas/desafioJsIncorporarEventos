const listaUsuarios = document.querySelector('#usuarios')
const clientesRegistrados = [];
const inputNombre = document.querySelector('#validationCustom01');
const inputApellido = document.querySelector('#validationCustom02');
const inputEdad = document.querySelector('#validationCustom03');
const inputDocumento = document.querySelector('#validationCustom04');
const inputTelefono = document.querySelector('#validationCustom05');
const inputEmail = document.querySelector('#validationCustom06');
const inputDireccion = document.querySelector('#validationCustom07');
const form = document.querySelector('#formulario')

const btnSimulaTuCredito = document.querySelector('#botonSimulaTuCredito')
const divPrimeraPregunta = document.querySelector('#primeraPregunta')
const btnContinuarPrimeraPregunta = document.querySelector('#botonContinuarPrimeraPregunta')
const inputPrimeraPregunta = document.querySelector('#inputPrimeraPregunta')
const divSolvenciaMayorDoscientos = document.querySelector('#solvenciaMayorDoscientos')
const divsolvenciaMenorDoscientosMayorCientoCincuenta = document.querySelector('#solvenciaMenorDoscientosMayorCientoCincuenta')
const divsolvenciaMenorCientoCincuentaMayorCien = document.querySelector('#solvenciaMenorCientoCincuentaMayorCien')
const divsolvenciaMenorCien = document.querySelector('#solvenciaMenorCien')

const divSegundaPregunta = document.querySelector('#segundaPregunta')
const btnContinuarSegundaPregunta = document.querySelector('#botonContinuarSegundaPregunta')
const inputSegundaPregunta = document.querySelector('#inputSegundaPregunta')
const divsolicitudMayorUnMillon = document.querySelector('#solicitudMayorUnMillon')
const divsolicitudCreditoAceptada = document.querySelector('#solicitudCreditoAceptada')


function ordenarAlfabeticamente(){
    const ordenAlfabetico = clientesRegistrados.sort ((a, b) =>{
        if (a.apellido > b.apellido){
            return 1
        } else if (a.apellido < b.apellido){
            return -1
        }
    })
}
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const edad = inputEdad.value
    const documento = inputDocumento.value
    const telefono = inputTelefono.value
    const email = inputEmail.value
    const direccion = inputDireccion.value

    const usuario = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento,
        telefono: telefono,
        email: email,
        direccion: direccion
    }

    clientesRegistrados.push(usuario)
    form.reset()

    console.log(clientesRegistrados);
    ordenarAlfabeticamente()

    const li = document.createElement('li')
    li.innerHTML=`
                <h3>Nombre y Apellido: ${usuario.nombre} ${usuario.apellido}<h4>
                <p>Edad: ${usuario.edad}</p>
                <p>D.N.I.: ${usuario.documento}</p>
                <p>Teléfono: ${usuario.telefono}</p>
                <p>E-mail: ${usuario.email}</p>
                <p>Direccion: ${usuario.direccion}.</p>`
    listaUsuarios.append(li)
});

btnSimulaTuCredito.addEventListener('click', () =>{
    divPrimeraPregunta.classList.remove('hidden')
})

btnContinuarPrimeraPregunta.addEventListener('click', () =>{
    divSolvenciaMayorDoscientos.classList.add('hidden')
    divsolvenciaMenorDoscientosMayorCientoCincuenta.classList.add('hidden')
    divsolvenciaMenorCientoCincuentaMayorCien.classList.add('hidden')
    divsolvenciaMenorCien.classList.add('hidden')

    divSegundaPregunta.classList.remove('hidden')
    if (inputPrimeraPregunta.value > 200000){
        divSolvenciaMayorDoscientos.classList.remove('hidden')
    } else if (inputPrimeraPregunta.value <= 200000 && inputPrimeraPregunta.value >= 150000){
        divSolvenciaMayorDoscientos.classList.add('hidden')
        divsolvenciaMenorDoscientosMayorCientoCincuenta.classList.remove('hidden')
    } else if (inputPrimeraPregunta.value < 150000 && inputPrimeraPregunta.value > 100000){
        divsolvenciaMenorDoscientosMayorCientoCincuenta.classList.add('hidden')
        divsolvenciaMenorCientoCincuentaMayorCien.classList.remove('hidden')
    } else {
        divsolvenciaMenorCientoCincuentaMayorCien.classList.add('hidden')
        divsolvenciaMenorCien.classList.remove('hidden')
    }
    inputPrimeraPregunta.value = ""
})

btnContinuarSegundaPregunta.addEventListener('click', () =>{
 
    let interes = 1.53;  
    if (inputSegundaPregunta.value > 1000000){
        divsolicitudMayorUnMillon.classList.remove('hidden')
    } else {
        divsolicitudMayorUnMillon.classList.add('hidden')
        let div = document.createElement("div")
        div.innerHTML = `<h4> En función del dinero solicitado, en calidad de préstamo personal, Ud. deberá devolver <b>36 cuotas fijas, mensuales y finales de $ ${(inputSegundaPregunta.value * interes) / 36} </b>. Un asesor comercial lo contactará a la brevedad. Gracias por confiar en nosotros y hasta pronto!!</h4>`
        divsolicitudCreditoAceptada.appendChild(div)
    }
    inputSegundaPregunta.value = ""
})



