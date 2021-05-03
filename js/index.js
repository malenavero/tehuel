window.addEventListener('load', diasSinTehuel);

function diasSinTehuel(){
    let daysPassed = Math.floor( ( ( new Date() ) - ( new Date("2021-03-11T00:00:00.000-03:00") ) ) / ( 1000 * 60 * 60 * 24 ) )

    let days = document.querySelector('#dias');

    days.innerText = daysPassed

}





