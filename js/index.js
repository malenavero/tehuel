function diasSinTehuel(){
    /* lo construyo con "," en vez de "-" para setearlo en utc */
    /* const initialDate = new Date(2021,02,11) */
    /* construyo la fecha actual con anio + mes + dia para poder tenerlo en time 00 de utc */
    /*     let actualDate= new Date(new Date().getFullYear(), new Date().getMonth() , new Date().getDate())
    let diff = actualDate.getTime() - initialDate.getTime();
    let daysPassed = Math.round(diff / (1000 * 60 * 60 * 24));
    document.body.innerHTML = `<article><h1 class="parpadea">${daysPassed} DÍAS SIN TEHUEL</h1></article>`; */
    
    return Math.floor( ( ( new Date() ) - ( new Date("2021-03-11T00:00:00.000-03:00") ) ) / ( 1000 * 60 * 60 * 24 ) )*/
}


