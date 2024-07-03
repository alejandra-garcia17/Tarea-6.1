class Ejercicios{

    // Arreglos
    Ejercicio1(){
        let dia = parseInt(document.getElementById("num").value)
        let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
        dia = dia - 1 
        const result = document.getElementById('resultado');

        if (dia >= 0 && dia <= 7){
            result.innerHTML = "El dia es " + dias[dia] 
        } else{
            result.innerHTML = "El dia no es correcto" 
        }
    }

    // Cadena
    vocales(){
        let cad = document.getElementById("frase").value
        

        for (let i = 0; i < cad.length; i++){
            if (cad[i] == 'a' || cad[i] == 'e' || cad[i] == 'i' || cad[i] == 'o' || cad[i] == 'u' || cad[i] == 'A' || cad[i] == 'E' || cad[i] == 'I' || cad[i] == 'O' || cad[i] == 'U' ){
                let C=C+1
            } 
        }

        document.getElementById("resultado").innerHTML = `<p>La frase tiene '${c}' vocales</p>`
    }

}

let ope = new Ejercicios()