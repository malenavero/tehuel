
function diasSinTehuel(){
    const initialDate = new Date("2021-03-11")
    let actualDate = new Date()
    let diff = actualDate.getTime() - initialDate.getTime();
    let daysPassed = Math.round(diff / (1000 * 60 * 60 * 24))-1;
    document.body.innerHTML = `<article><h1 class="parpadea">${daysPassed} DÍAS SIN TEHUEL<h1></article>`;
    return daysPassed
}

/* como hago para que no me tome la hr y me tome a partir de las 00hrs */
console.log(diasSinTehuel())


