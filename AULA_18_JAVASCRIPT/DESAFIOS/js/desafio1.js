function alterarCor() {
    const aleatorio1 = Math.floor(Math.random() * 100);
    const aleatorio2 = Math.floor(Math.random() * 100);  
    const aleatorio3 = Math.floor(Math.random() * 100);

    const cor = `#${aleatorio1}${aleatorio2}${aleatorio3}`
   
    document.querySelector('div').innerHTML = cor
    document.querySelector('body').style.backgroundColor = cor
}

const btn = document.getElementById("btn")
btn.addEventListener('click', () => {
    alterarCor()
})

setInterval(() => {
    alterarCor()
}, 5000)