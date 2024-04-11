const generateMainBoard = function () {
    // funzione che crea il tabellone


    let tabelloneTombola = document.getElementById('contentTombola');

    let tabellone = document.createElement('table');
    let num = 1;

    for (let i = 0; i < 10; i++) {       //eseguo il primo ciclo for perchè la tab ha 10 righe
        let row = tabellone.insertRow();
        for (let i = 0; i < 10; i++) {  // nel secondo ciclo creo le celle all'interno di ciascuna riga.
            let cell = row.insertCell();
            cell.textContent = num;
            num++;
        }
    }

    tabelloneTombola.appendChild(tabellone);




}

generateMainBoard();

///////////////////////////////////////////////////////////7

function fillArray() {
    // inserire in un array
    /*
    let tabelloneArray = [];
    generateMainBoard();
    for (let i = 0; i < rows.length; i++) {
        let cell = rows[i].getElementsByTagName('td');
        let rowArray = [];
    
        for (let i = 0; i < cells.length; i++) {
            let num = parseInt(cells[i].textContent);
            rowArray.push(num);
        }
    
        tabelloneArray.push(rowArray);
    }
    console.log(tabelloneArray);
*/

}



//////////////////////////////////////////////////////////////////
const getRandomNum = function () {
    let randomRow = Math.floor(Math.random() * 10); // Genera un numero casuale per selezionare una riga
    let randomCol = Math.floor(Math.random() * 10); // Genera un numero casuale per selezionare una colonna

    let rows = tabellone.getElementsByTagName('tr');
    let cells = rows[randomRow].getElementsByTagName('td');
    let extractedNum = parseInt(cells[randomCol].textContent); // Estrae il numero dalla cella selezionata

    console.log("Numero estratto dalla tabella: " + extractedNum);
    // Puoi utilizzare il numero estratto per le operazioni desiderate

    return extractedNum;




}
// collegamento bottone
let button = document.querySelector("#estraiNumero")
contentTombola.appendChild(button);

// Aggiunta dell'evento click al bottone per chiamare la funzione getRandomNum
button.addEventListener('click', getRandomNum);

getRandomNum()




////////////////////////////////////////////////////////////

const generateRandNumber = function () {
    // stampare il numero
    // associare la classe...
}

const generateUserBoards = function () {
    // genera e gestisce le tabelline
}




/*
let randomNum = Math.floor(Math.random() * 100) + 1; // Genera un numero casuale da 1 a 100
        let randomRow = Math.floor(Math.random() * 10); // Genera un numero casuale per selezionare una riga
        let randomCol = Math.floor(Math.random() * 10); // Genera un numero casuale per selezionare una colonna
    
        let rows = contentTombola.getElementsByTagName('tr');
        let cells = rows[randomRow].getElementsByTagName('td');
        cells[randomCol].textContent = randomNum; // Aggiorna il numero casuale nella cella selezionata
    });
    */


    /*
    let button = document.querySelector("#estraiNumero")
    contentTombola.appendChild(button);
    button.addEventListener('click', function () {
        let getRandomNum = getRandomNum();

    });
*/

