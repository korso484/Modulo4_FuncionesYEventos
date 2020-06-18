//Funciones de calculo
var suma = (op1, op2) => op1+op2;
var resta = (op1, op2) => op1-op2;
var multiplicacion = (op1, op2) => op1*op2;
var division = (op1, op2) => op1/op2;


//Funcion extraer inputs
function getInput1(){
    var primero = parseInt(document.getElementById("numero1").value); 
    return primero;
}

function getInput2(){
    var segundo = parseInt(document.getElementById("numero2").value); 
    return segundo;
}

//funciones ejecutar operaciones
function ejecutarSuma(){
    var resulta; 
    if(isNaN(getInput1()) || isNaN(getInput2())){
        document.getElementById("resultado").innerText = "Por favor introduzca dos números";
    }else{
        resulta = suma(getInput1(), getInput2());
        document.getElementById("resultado").innerText = resulta;
    }  
}

function ejecutarResta(){
    var resulta;
    if(isNaN(getInput1()) || isNaN(getInput2())){
        document.getElementById("resultado").innerText = "Por favor introduzca dos números";
    }else{
        resulta = resta(getInput1(), getInput2());
        document.getElementById("resultado").innerText = resulta;
    } 
}
    

function ejecutarMultiplicacion(){
    var resulta;
    if(isNaN(getInput1()) || isNaN(getInput2())){
        document.getElementById("resultado").innerText = "Por favor introduzca dos números";
    }else{
        resulta = multiplicacion(getInput1(), getInput2());
        document.getElementById("resultado").innerText = resulta;
    }    
}

function ejecutarDivision(){
    var resulta;
    if(isNaN(getInput1()) || isNaN(getInput2())){
        document.getElementById("resultado").innerText = "Por favor introduzca dos números";
    }else{
        resulta = division(getInput1(), getInput2());
    document.getElementById("resultado").innerText = resulta;
    }    
}


//Eventos asociados a botones
document.getElementById("botonSuma").addEventListener("click", ejecutarSuma);   
document.getElementById("botonResta").addEventListener("click", ejecutarResta);
document.getElementById("botonMultiplicacion").addEventListener("click", ejecutarMultiplicacion);
document.getElementById("botonDivision").addEventListener("click", ejecutarDivision);
