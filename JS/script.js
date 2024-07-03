class Ejercicios{

    // CAMBIAR TODO,POBNER UN EJERCICIO SIMILAR

    // Ejercicios Básicos de Procesos Selectivos (Condiciones)
    // Ejercicio 1: Determinar si un número es par o impar
    Ejercicio1(){
        let num = document.getElementById('num').value;
        let resultado = document.getElementById('resultado');
        
        if (num % 2 === 0) {
            resultado.textContent = `${num} es par`;
        } else {
            resultado.textContent = `${num} es impar`;
        }
    }

    // Ejercicio 2: Determinar si una persona es mayor de edad
    Ejercicio2(){
        let num = document.getElementById('num').value;
        let resultado = document.getElementById('resultado');
        
        if (num >= 18) {
            resultado.textContent = `Usted es mayor de edad`;
        } else {
            resultado.textContent = `Usted no es mayor de edad`;
        }
    }

    // Ejercicio 3: Determinar si un número es positivo, negativo o cero
    Ejercicio3(){
        let num = document.getElementById('num').value;
        let resultado = document.getElementById('resultado');

        if (num > 0) {
            resultado.textContent = `${num} es positivo`;
        }else if (num < 0){
            resultado.textContent = `${num} es negativo`;
        }else{
            resultado.textContent = `${num} es cero`;
        }
    }

    // Ejercicio 4: Determinar si un año es bisiesto
    Ejercicio4(){
        let year = document.getElementById('num').value;
        let resultado = document.getElementById('resultado');


        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            resultado.textContent = `${year} es un año bisiesto`;
        } else {
            resultado.textContent = `${year} no es un año bisiesto`;
        }
    }

    // Ejercicio 5: Determinar el mayor de dos números
    Ejercicio5(){
        let numero1 = document.getElementById('num1').value;
        let numero2 = document.getElementById('num2').value;
        let resultado = document.getElementById('resultado');

        if (numero1 > numero2) {
            resultado.textContent = `${numero1} es mayor que ${numero2}`;
        } else if (numero1 < numero2) {
            resultado.textContent = `${numero2} es mayor que ${numero1}`;
        } else {
            resultado.textContent = "Ambos numeros son iguales";
        }
    }

    // Ejercicios con Bucles
    // Ejercicio 1: Presentar los números pares de n números
    Ejercicio6(){
        let n = document.getElementById('num').value;
        let resultado = document.getElementById('resultado');

        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                resultado.textContent += i + " es par, ";
            }
        }
    }

    // Ejercicio 2: Presentar los divisores de un número
    Ejercicio7(){
        let numero = document.getElementById('num').value;
        let resultado = document.getElementById('resultado');

        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                resultado.textContent += i + ` es divisor de ${numero}, `;;
            }
        }

    }

    // Ejercicio 3: Verificar si un número es perfecto
    Ejercicio8() {
        let numero = parseInt(document.getElementById('numero').value);
        let suma = 0;
        let resultado = document.getElementById('resultado');

        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                suma += i;
            }
        }

        if (suma === numero) {
            resultado.textContent = numero + " es un número perfecto";
        } else {
            resultado.textContent = numero + " no es un número perfecto";
        }
    }

    // Ejercicio 4: Verificar si un número es primo
    Ejercicio9(){
        let numero = parseInt(document.getElementById('numero').value);
        let esPrimo = true;

        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            resultado.textContent = numero + " es un número primo";
        } else {
            resultado.textContent = numero + " no es un número primo";
        }
    }

    // Ejercicio 5: Invertir un número dividiendo para diez
    Ejercicio10(){
        let numero = parseInt(document.getElementById('numero').value);
        let invertido = 0;

        while (numero !== 0) {
            let digito = numero % 10;
            invertido = invertido * 10 + digito;
            numero = Math.floor(numero / 10);
        }

        resultado.textContent = "El número invertido es " + invertido;
    }

    // Ejercicio 6: Multiplicación de dos números por sumas sucesivas
    Ejercicio11(){
        let numero1 = parseInt(document.getElementById('numero1').value); 
        let numero2 = parseInt(document.getElementById('numero2').value); 
        let result = 0; 
        let resultado = document.getElementById('resultado');
 
        for (let i = 0; i < numero2; i++) { 
        result += numero1; 
        } 
 
        resultado.textContent = "El resultado de la multiplicación es " + result;
    }

    // Ejercicio 7: División de dos números por restas sucesivas
    Ejercicio12(){
        let dividendo = parseInt(document.getElementById('dividendo').value);  
        let divisor = parseInt(document.getElementById('divisor').value); 
        let cociente = 0; 
        let resultado = document.getElementById('resultado');
 
        while (dividendo >= divisor) { 
            dividendo -= divisor; 
            cociente++; 
        } 
 
        resultado.textContent = "El cociente de la división es " + cociente;
    }

    // Ejercicio 8: Presentar la serie de Fibonacci de n números
    Ejercicio13(){
        let n = parseInt(document.getElementById('n').value);   
        let a = 0;  
        let b = 1; 
        let resultado = document.getElementById('resultado');
        let serie = `${a}, ${b}`;

        for (let i = 2; i < n; i++) { 
            let c = a + b; 
            serie += `, ${c}`;
            a = b; 
             b = c; 
        } 

        resultado.textContent = serie;
    }


    // Ejercicio 9: Presentar los números múltiplos de 5 de un arreglo
    Ejercicio14() {
        const input = document.getElementById('numeros').value;
        const numeros = input.split(',').map(num => parseInt(num.trim()));
        const resultadoDiv = document.getElementById('resultado');
    
        for (let i = 0; i < numeros.length; i++) { 
            if (numeros[i] % 5 === 0) {
                resultadoDiv.innerHTML += `<p>${numeros[i]} es múltiplo de 5</p>`;
            }
        }
    }

    // Ejercicio 10: El promedio de los números de un arreglo
    Ejercicio15() {
        const input = document.getElementById('numeros').value;
        const numeros = input.split(',').map(num => parseInt(num.trim()));
        let suma = 0;
        const resultadoDiv = document.getElementById('resultado');
        
        for (let i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }

        let promedio = suma / numeros.length;
        resultadoDiv.innerHTML = `<p>El promedio es ${promedio}</p>`;
    }

    // Ejercicio 11: El mayor de los elementos de un arreglo 
    Ejercicio16() {
        const input = document.getElementById('numeros').value;
        const numeros = input.split(',').map(num => parseInt(num.trim()));
        let mayor = numeros[0];
        const resultadoDiv = document.getElementById('resultado');

        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }
        }

        resultadoDiv.innerHTML = `<p>El mayor número es ${mayor}</p>`;
    }

    // Ejercicio 13: Los pares de un arreglo recorridos desde el último elemento al primero
    Ejercicio17() {
        const input = document.getElementById('numeros').value;
        const numeros = input.split(',').map(num => parseInt(num.trim()));
        const resultadoDiv = document.getElementById('resultado');

        for (let i = numeros.length - 1; i >= 0; i--) {
            if (numeros[i] % 2 === 0) {
                resultadoDiv.innerHTML += `<p>${numeros[i]} es par</p>`;
            }
        }
    }
    
    // CADENAS
    // 1. Imprimir cada carácter de una cadena
    Ejercicio18() {
        const cadena = document.getElementById('cadena').value;
        const result = document.getElementById('resultado');
        
        for (let i = 0; i < cadena.length; i++) {
            result.innerHTML += `<br>${cadena[i]}<br>`;
        }
    }
    
    // 2. Contar las vocales en una cadena
    Ejercicio19() {
        const cadena = document.getElementById('cadena').value.toLowerCase();
        const vocales = ['a', 'e', 'i', 'o', 'u'];
        let contador = 0;
        const result = document.getElementById('resultado');

        for (let i = 0; i < cadena.length; i++) {
            if (vocales.includes(cadena[i])) {
                contador++;
            }
        }
        
        // Mostrar el número de vocales en el div de resultados
        
        result.innerHTML = `<p>La cadena tiene ${contador} vocales.</p>`;
    }
    
    // 3. Invertir una cadena
    Ejercicio20() {
        const cadena = document.getElementById('cadena').value;
        let cadenaInvertida = "";
        const result = document.getElementById('resultado');
    
        for (let i = cadena.length - 1; i >= 0; i--) {
            cadenaInvertida += cadena[i];
        }
        
        
        result.innerHTML = `<p>La cadena invertida es: ${cadenaInvertida}</p>`;
    }

    // 4. Contar palabras en una cadena
    Ejercicio21() {
        const cadena = document.getElementById('cadena').value.trim();
        let contadorPalabras = 0;
        const result = document.getElementById('resultado');
    
        if (cadena !== "") {
            const palabras = cadena.split(/\s+/); // \s+ es una expresión regular que encuentra uno o más espacios
            contadorPalabras = palabras.length;
        }
    
        result.innerHTML = `<p>La cadena tiene ${contadorPalabras} palabras.</p>`;
    }

    // 5. Reemplazar espacios con guiones
    Ejercicio22() {
        const cadena = document.getElementById('cadena').value;
        let cadenaModificada = "";
        const result= document.getElementById('resultado');

        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === " ") {
                cadenaModificada += "-";
            } else {
                cadenaModificada += cadena[i];
            }
        }

        result.innerHTML = `<p>La cadena modificada es: ${cadenaModificada}</p>`;
    }

    // 6. Contar caracteres específicos
    Ejercicio23() {
        const cadena = document.getElementById('cadena').value;
        const caracter = document.getElementById('caracter').value;
        let contador = 0;
        const result = document.getElementById('resultado');
 
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === caracter) {
                contador++;
            }
        }

        result.innerHTML = `<p>El carácter '${caracter}' aparece ${contador} veces en la cadena.</p>`;
    }

    // 7. Eliminar caracteres específicos
    Ejercicio24() {
        const cadena = document.getElementById('cadena').value;
        const caracter = document.getElementById('caracter').value;
        let nuevaCadena = "";
        const result = document.getElementById('resultado');

        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] !== caracter) {
                nuevaCadena += cadena[i];
            }
        }

        result.innerHTML = `<p>La cadena sin el carácter '${caracter}' es: ${nuevaCadena}</p>`;
    }

    // 8. Convertir mayúsculas a minúsculas y viceversa
    Ejercicio25() {
        const cadena = document.getElementById('cadena').value;
        let nuevaCadena = "";
        const result = document.getElementById('resultado');

        for (let i = 0; i < cadena.length; i++) {
            let char = cadena[i];
            if (char >= 'a' && char <= 'z') {
                nuevaCadena += String.fromCharCode(char.charCodeAt(0) - 32);
            } else if (char >= 'A' && char <= 'Z') {
                nuevaCadena += String.fromCharCode(char.charCodeAt(0) + 32);
            } else {
                nuevaCadena += char;
            }
        }

        result.innerHTML = `<p>La cadena convertida es: ${nuevaCadena}</p>`;
    }

    // 9. Eliminar espacios
    Ejercicio26() {
        const cadena = document.getElementById('cadena').value;
        let nuevaCadena = "";
        const result = document.getElementById('resultado');

        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] !== " ") {
                nuevaCadena += cadena[i];
            }
        }
        
        result.innerHTML = `<p>La cadena sin espacios es: ${nuevaCadena}</p>`;
    }

    // 10. Contar la longitud de la palabra más larga
    Ejercicio27() {
        const cadena = document.getElementById('cadena').value;
        let palabraActual = "";
        let longitudMaxima = 0;
        const result = document.getElementById('resultado');
        
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === " " || i === cadena.length - 1) {
                if (i === cadena.length - 1) {
                    palabraActual += cadena[i];
                }
                if (palabraActual.length > longitudMaxima) {
                    longitudMaxima = palabraActual.length;
                }
                palabraActual = "";
            } else {
                palabraActual += cadena[i];
            }
        }

        result.innerHTML = `<p>La longitud de la palabra más larga es: ${longitudMaxima}</p>`;
    }
}

let ope = new Ejercicios()

