//Data e hora do Filme de estreia do Sobrenatural 6 - Insidious (29 de agosto de 2026)
const estreiaFilme = new Date('2026-7-21T22:00:00');
// Mês começa em 0 (0 = Janeiro, 1 = Fevereiro, ..., 7 = Agosto )

//Elementos do HTML
const timerElement = document.getElementById('timer');
const mensagemFinalElement = document.getElementById('mensagemFinal');

//Atualiza o contador
function atualizarContador() {
    const now = new Date().getTime();
    const distancia = estreiaFilme.getTime() - now;

    if (distancia < 0) {
        clearInterval(contadorInterval);
        timerElement.style.display = 'none';
        mensagemFinalElement.style.display = 'block';
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);  

    timerElement.innerHTML = `${String(dias).padStart(2, '0')}d ${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}
//Atualizaa cada segundo o contador
const contadorInterval = setInterval(atualizarContador, 1000);
atualizarContador();