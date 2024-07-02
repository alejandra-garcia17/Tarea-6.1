class Ejercicios{

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
        let resultado = document.getElementById('resultado');
        let result = 0

        for (let i = 0; i < numero2; i++) {
            result += numero1;
        }

        resultado.textContent = "El resultado de la multiplicación es " + result;
    }
}



let ope = new Ejercicios()

