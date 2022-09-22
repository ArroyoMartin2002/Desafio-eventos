const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let monto = document.getElementById("monto").value;
    let cuotas = document.getElementById("cuotas").value; 

    mostrarResultado(monto, cuotas);

    form.reset();
})


let calculoCuotas = (monto,cuotas) => {
    let total = (monto / cuotas);
    return total;
};

const resultado = document.getElementById("valorIndividual");

const mostrarResultado = (monto, cuotas) => {
    let aux ="";
    aux += `El valor de cada cuota SIN INTERES es de ${calculoCuotas(monto, cuotas)}`;
    resultado.innerHTML = aux;
}
