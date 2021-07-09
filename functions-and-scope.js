// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

/* Opdracht  1: Cum Laude */

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

//SCRIPT SCHRIJVEN
//doorloop elk cijfer in de array of die 8 is over hoger dan 8.
//zit er een 8 of hoger in de array?
//als je er een tegenkomt sla deze op.
//geef weer hoeveel cijfers met 8 of hoger er zijn

function checkGrades() {
    let cumLaudeNumbers = [];

    for( let i = 0; i < grades.length; i++ ) {
        if ( grades[i] >= 8 ) {
            cumLaudeNumbers.push( grades[i] );
        }
    }
    return cumLaudeNumbers.length;
}
console.log( checkGrades() );
// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude( cijfers ) {
    let cumLaudeNumbers = [];

    for( let i = 0; i < cijfers.length; i++ ) {
        if ( cijfers[i] >= 8 ) {
            cumLaudeNumbers.push( cijfers[i] );
        }
    }
    return cumLaudeNumbers.length;
}

console.log( cumLaude(grades) );
console.log( cumLaude([6, 4, 5]) );
console.log( cumLaude([8, 9, 4, 6, 10]) );

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

//SCRIPT
//functie om het gemiddelde te berekenen
//pak ieder nummer van de array en tel dat bij elkaar op
//pak het opgetelde nummer en deel het door de aantal nummers dat de array heeft.
//geef uitkomst

function giveAverage() {
  let sum = 0 ;
  for( let i = 0; i < grades.length; i++ ) {
      sum += grades[i];
  }
  return ( sum / grades.length );
}
console.log( giveAverage() );
// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function averageGrade( numbersAverage ) {
    let sum = 0 ;
    for( let i = 0; i < numbersAverage.length; i++ ) {
        sum = numbersAverage[i] + sum;
    }
    return ( sum / numbersAverage.length );
}
console.log( averageGrade(grades) );
console.log( averageGrade([6, 4, 5]) );
console.log( averageGrade([8, 9, 4, 6, 10]) );

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
function averageGrade1( numbersAverage1 ) {
    let sum = 0 ;
    for( let i = 0; i < numbersAverage1.length; i++ ) {
        sum = numbersAverage1[i] + sum;
    }
    return (sum/numbersAverage1.length).toFixed(2);
}
console.log( averageGrade1(grades) );
console.log( averageGrade1([6, 4, 5]) );
console.log( averageGrade1([8, 9, 4, 6, 10]) );


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

//SCRIPT
//functie om hoogste cijfer te zoeken
//loop door een array en zoek naar de hoogste cijfer
//sla de hoogste cijfer op en vergelijk met ieder cijfer die je tegenkomt tot einde array
//return hoogste cijfer als loop voorbij is.

function findLargest() {
    let largest = 0;
    for( let i = 0; i <= largest; i++ ) {
        if ( grades[i] > largest ) {
            largest = grades[i];
        }
    }
    return largest;
}
console.log( findLargest() );


// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGrade( numbersGrades ) {
    let largest = 0;
    for( let i = 0; i <= largest; i++ ) {
        if ( numbersGrades[i] > largest ) {
            largest = numbersGrades[i];
        }
    }
    return largest;
}
console.log( highestGrade(grades) );
console.log( highestGrade([6, 4, 5]) );
console.log( highestGrade([8, 9, 4, 6, 10]) );

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
