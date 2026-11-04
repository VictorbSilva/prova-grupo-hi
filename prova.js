function validarServico(saldo, preco){
    const saldoValido = saldo >= 0 && Number.isInteger(saldo);
    const precoValido = preco > 0 && Number.isInteger(preco);

    if (!saldoValido && !precoValido) return {saldo: "Inválido", preco: "Inválido", resultado: "Entrada Inválida", msg: "Serviço não autorizado. Insira um preço inteiro e maior que zero e um saldo inteiro e maior ou igual a zero.", saldofinal: "Saldo indisponível" }

    if (!saldoValido) return { saldo: "Inválido", preco: preco, resultado: "Entrada Inválida", msg: "Serviço não autorizado. Insira um saldo inteiro e maior ou igual a zero.", saldofinal: "Saldo indisponível" };

    if (!precoValido) return { saldo: saldo, preco: "Inválido", resultado: "Entrada Inválida", msg:"Serviço não autorizado. Insira um preço inteiro e maior que zero.", saldofinal: saldo }

    if (saldo < preco) return { saldo: saldo, preco: preco, resultado: "Recusado", msg: "Serviço recusado. Saldo insuficiente.", saldofinal: saldo }

    return {saldo: saldo, preco: preco, resultado: "Autorizado", msg: "Serviço autorizado", saldofinal: saldo - preco}
}

console.log(validarServico(30,15))
console.log(validarServico(10,15))
console.log(validarServico(15,15))
console.log(validarServico(0,15))
console.log(validarServico(-10,-15))
console.log(validarServico(0.15,15))
console.log(validarServico(40,0))