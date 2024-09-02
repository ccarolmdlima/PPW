//let titulo = document.getElementById("titulo").value;
//console.log(titulo);


function submeter() {
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    
    //console.log(cpf);
    console.log(validaCPF(cpf));
    console.log(validaEmail(email));
}

function validaCPF(cpf) {
    if(cpf == "") {
        alert("Campo CPF não pode ser vazio");
        return false;
    }
    
    cpf = cpf.trim();

    if(/[a-zA-Z]/.test(cpf)) {
        alert("CPF não pode conter letras");
        return false;
    }

    if(!/^[\d.-]+$/.test(cpf)) {
        alert("CPF só pode conter números, '.' ou '-'");
        return false;
    } 

    if(cpf.length != 11 && cpf.length != 14) {
        alert("Formato inválido");
        return false;
    }

    //Continuar validação
    // Formatos CPFs válidos:
    // 123.456.789-10
    // 12345678910

    return true;
}

function validaEmail(email) {
    return /^[\w]+@[\w]+.[a-zA-Z]+$/.test(email) // \w aceita qualquer letra do alfabeto
    
}