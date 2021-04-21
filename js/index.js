function diasSinTehuel(){
    /* lo construyo con "," en vez de "-" para setearlo en utc */
    const initialDate = new Date("2021,03,11")
    /* construyo la fecha actual con anio + mes + dia para poder tenerlo en time 00 de utc */
    let actualDate = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth() , new Date().getUTCDate())

    let diff = actualDate.getTime() - initialDate.getTime();
    let daysPassed = Math.round(diff / (1000 * 60 * 60 * 24));
    document.body.innerHTML = `<article><h1 class="parpadea">${daysPassed} DÍAS SIN TEHUEL<h1></article>`;
    return daysPassed
}


