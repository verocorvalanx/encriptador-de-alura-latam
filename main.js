const campo_texto = document.querySelector("#texto-encriptado");

const mensaje = document.querySelector("#texto-mensaje");

/* Encriptar */


const btnEncriptar = () => {
    document.getElementById("mensaje-muñeco").style.display = "none";
    mensaje.style.display = "flex";
    document.getElementById("btnCopiar").style.display = "flex";


    let textoEncriptado = encriptar(campo_texto.value)
    mensaje.value = textoEncriptado
}


const encriptar = (stringEncriptada) => {
    let regex = /^[a-z \n]+$/;   //validación, solo minúsculas y sin caracteres especiales

    if (regex.test(campo_texto.value)) {

        let matrizCodigo = [
            ["e", "enter"],
            ["i", "imes"],
            ["a", "ai"],
            ["o", "ober"],
            ["u", "ufat"]
        ];

        stringEncriptada = stringEncriptada.toLowerCase()

        for (let i = 0; i < matrizCodigo.length; i++) {

            if (stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

            }

        }

        return stringEncriptada

    }

    else {
        Swal.fire({
            text: "Vuelva a ingresar el texto en minúscula y sin caracteres especiales",
            background: '#F3F5FC',
            confirmButtonColor: '#0A3871'
        });

    }
}

/* Desencriptar */


const btnDesencriptar = () => {
    document.getElementById("mensaje-muñeco").style.display = "none";
    mensaje.style.display = "flex";
    document.getElementById("btnCopiar").style.display = "flex";


    let textoDesencriptado = desencriptar(campo_texto.value)
    mensaje.value = textoDesencriptado
}

const desencriptar = (stringDesencriptada) => {
    let regex = /^[a-z \n]+$/;   //validación, solo minúsculas y sin caracteres especiales

    if (regex.test(campo_texto.value)) {

        let matrizCodigo = [
            ["e", "enter"],
            ["i", "imes"],
            ["a", "ai"],
            ["o", "ober"],
            ["u", "ufat"]
        ];

        stringDesencriptada = stringDesencriptada.toLowerCase()

        for (let i = 0; i < matrizCodigo.length; i++) {

            if (stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

            }

        }

        return stringDesencriptada

    } else {
        Swal.fire({
            text: "Vuelva a ingresar el texto en minúscula y sin caracteres especiales",
            background: '#F3F5FC',
            confirmButtonColor: '#0A3871'
        });

    }
}

/* Copiar */

const btnCopiar = () => {
    navigator.clipboard.writeText(mensaje.value);

    Swal.fire({
        text: "Texto copiado",
        background: '#F3F5FC',
        confirmButtonColor: '#0A3871'
    });

}


